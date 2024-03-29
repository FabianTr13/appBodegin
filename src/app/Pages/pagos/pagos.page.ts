import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Storage } from '@ionic/storage';
import { PagosService } from '../../Services/pagos.service';
import { isApp } from '../../Config/configuration';
import { LoadingController, Platform } from '@ionic/angular';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


declare let paypal: any;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  addScript: boolean = false;
  monto = '0'
  pagos = {
    dias_restantes:0,
    historial:[]
  };
  es_movil = false;
  isLoading = false
  pdfObj = null;

  constructor(private payPal1: PayPal,
              private Pro_pagos:PagosService,
              private storage:Storage,
              public loadingController: LoadingController,
              private file: File,
              private fileOpener: FileOpener,
              private plt: Platform,
            ) { }

  ngOnInit() {
    this.reload()
    this.es_movil = isApp;
  }

  reload(){
    this.present()
    this.storage.get('token').then(token=>{
      this.Pro_pagos.getPagos(token).subscribe(async data=>{
          this.pagos = data;
          this.monto = data.monto
          await this.dismiss()
      })
    })
  }

  pagar(){
    this.payPal1.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_'
    }).then(() => {
    this.payPal1.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    })).then(() => {
      let payment = new PayPalPayment(this.monto, 'USD', 'Description', 'sale');
      this.payPal1.renderSinglePaymentUI(payment).then(async respose => {
        await this.Pro_pagos.insertPago(respose, respose.response.id, this.monto)
        this.reload();
      }, () => {});
      }, () => {});
    }, () => {});
  }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.monto, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then(async payment => {
        await this.Pro_pagos.insertPago(payment, payment.id, this.monto)
        this.reload();
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  async doRefresh(event) {
    this.reload()
    event.target.complete();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => {});
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {});
  }



  //----------------------------------------------------------------------------
  async share(id_pago){
    let pagos = await this.Pro_pagos.getFactura(id_pago)

    var docDefinition = {
     content: [
       { text: 'Factura', style: 'header' },
       { text: pagos['bodegin_nombre'], alignment: 'center' },
       { text: 'RTN: ' + pagos['bodegin_rtn'], alignment: 'center' },
       { text: 'CAI: ' + pagos['cai'], alignment: 'center' },
       { text: 'Direccion: ' + pagos['bodegin_direccion'], alignment: 'center' },
       { text: 'Telefono: ' + pagos['bodegin_telefono'], alignment: 'center' },
       { text: 'Fecha: ' + pagos['fecha'], alignment: 'left' },
       { text: 'Cliente:' + pagos['nombre_legal'], style: 'subheader' },
       { text: 'RTN:' + pagos['rtn'], style: 'subheader' },
       { text: 'Numero factura:' + pagos['numero_factura'], style: 'subheader' },
       { text: 'Detalle', style: 'subheader' },
       { text: '', style: 'story', margin: [0, 20, 0, 20] },
     {
      layout: 'lightHorizontalLines', // optional
      table: {
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],
        body: [
          [ 'Producto', 'Cant.', 'Precio Ant.', 'Total' ],
          [ pagos['descripcion'],
            '1',
            'L. ' + pagos['monto'],
            'L. ' + pagos['monto']
          ],
        ]
      }
    }
     ],
     styles: {
       header: {
         fontSize: 18,
         bold: true,
         alignment:'center'
       },
       subheader: {
         fontSize: 14,
         bold: true,
         margin: [0, 15, 0, 0]
       },
       story: {
         italic: true,
         alignment: 'center',
         width: '50%',
       }
     }
   }
   this.pdfObj = pdfMake.createPdf(docDefinition);
 }

 async downloadPdf(id_pago) {
   await this.share(id_pago)
   if (this.plt.is('cordova')) {
     this.pdfObj.getBuffer((buffer) => {
       var blob = new Blob([buffer], { type: 'application/pdf' });
       this.file.writeFile(this.file.dataDirectory, 'mifactura.pdf', blob, { replace: true }).then(fileEntry => {
         this.fileOpener.open(this.file.dataDirectory + 'mifactura.pdf', 'application/pdf');
       })
     });
   } else {
     this.pdfObj.download();
   }
 }

}
