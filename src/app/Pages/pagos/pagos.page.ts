import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Storage } from '@ionic/storage';
import { PagosService } from '../../Services/pagos.service';
import { isApp } from '../../Config/configuration';
import { LoadingController } from '@ionic/angular';
declare let paypal: any;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  addScript: boolean = false;
  monto = '0'
  pagos = [];
  es_movil = false;
  isLoading = false

  constructor(private payPal1: PayPal,
              private Pro_pagos:PagosService,
              private storage:Storage,
              public loadingController: LoadingController
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
        await this.Pro_pagos.insertPago(respose, this.monto)
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
        await this.Pro_pagos.insertPago(payment, this.monto)
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
}
