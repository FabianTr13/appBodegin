import { Component, OnInit, Input,ViewChild, ElementRef } from '@angular/core';
import { InventariosService } from '../../Services/inventarios.service';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.page.html',
  styleUrls: ['./ordenes-compra.page.scss'],
})
export class OrdenesCompraPage implements OnInit {

  @Input() id_producto: 102;
  @Input() id_sucursal: 30;

  letterObj = {
  to: '',
  from: '',
  text: ''
}

  orden = {
    nombre_legal: null,
    direccion: null,
    telefono:null,
    correo:null,
    rtn:null,
    fecha:null,
    nombre:null,
    id_sucursal:null,
    sucursal:null,
    cantidad_pedir:null,
    costo:null,
    logo :null
  }

    pdfObj = null;
  constructor(private Pro_inventario:InventariosService,
              private modalController:ModalController,
              private socialSharing: SocialSharing,
              public navCtrl: NavController,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener,
              private base64: Base64) { }

  ngOnInit() {
    this.Pro_inventario.getOrdenCompra(this.id_producto, this.id_sucursal).subscribe(data=>{
      this.orden = data
    })
  }

  async share(){
    var docDefinition = {
     content: [
       { text: 'Orden de compra', style: 'header' },
       { text: this.orden.nombre_legal, alignment: 'center' },
       { text: 'RTN: ' + this.orden.rtn, alignment: 'center' },
       { text: 'Direccion: ' + this.orden.direccion, alignment: 'center' },
       { text: 'Correo: '+ this.orden.correo, alignment: 'center' },
       { text: 'Telefono: ' + this.orden.telefono, alignment: 'center' },
       { text: 'Fecha: ' + this.orden.fecha, alignment: 'left' },
       { text: 'Detalle', style: 'subheader' },
       { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
     {
      layout: 'lightHorizontalLines', // optional
      table: {
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],
        body: [
          [ 'Producto', 'Cant.', 'Precio Ant.', 'Total' ],
          [ this.orden.nombre,
            this.orden.cantidad_pedir,
            this.orden.costo,
            (this.orden.costo * this.orden.cantidad_pedir)
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
 async downloadPdf() {
   await this.share()
   if (this.plt.is('cordova')) {
     this.pdfObj.getBuffer((buffer) => {
       var blob = new Blob([buffer], { type: 'application/pdf' });
       this.file.writeFile(this.file.dataDirectory, 'miorden.pdf', blob, { replace: true }).then(fileEntry => {
         this.fileOpener.open(this.file.dataDirectory + 'miorden.pdf', 'application/pdf');
       })
     });
   } else {
     this.pdfObj.download();
   }
 }

  async Salir(){
    this.modalController.dismiss();
  }
}
