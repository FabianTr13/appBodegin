import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

declare var window:any;

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {

  // @ViewChild('fileInput') fileInput:ElementRef;
  // @ViewChildren("fileInput") fileInputs: QueryList<ElementRef>;
  @ViewChild('fileInput') el:ElementRef;
  Pro_producto = {
    foto: [
      'assets/nuevo/camera.png'
    ],
    nombre:null,
    codigo:null,
    descripcion: null,
    cantidad: 1,
    categoria: null,
    costo: 0
  }

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  barCodeScanner(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.Pro_producto.codigo = barcodeData.text
      console.log(barcodeData)
    }).catch(err => {
        console.log('Error', err);
    });
  }

  take(){
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.CAMERA
  }

    this.camera.getPicture(options).then((imageData) => {
     const img = window.Ionic.WebView.convertFileSrc(imageData);
     this.Pro_producto.foto=[]
     this.Pro_producto.foto.push(img)
    }, (err) => {
     // Handle error
    });
  }

  loadImage(){
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
  }

    this.camera.getPicture(options).then((imageData) => {
     const img = window.Ionic.WebView.convertFileSrc(imageData);
     this.Pro_producto.foto=[]
     this.Pro_producto.foto.push(img)
    }, (err) => {
     // Handle error
    });
  }

  async presentActionSheet() {
    if (isApp) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Imagen',
        buttons: [{
          text: 'Fotografiar',
          handler: () => {
            this.take();
          }
        },
        {
          text: 'Elegir',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }]
      });
      await actionSheet.present();
    }else{
      let event = new MouseEvent('click', {bubbles: false});
      await this.el.nativeElement.dispatchEvent(event);
      // console.log((this.fileInput.nativeElement.files.FileList[0]))
    }
  }

  sumLess(p_cantidad:number){
    this.Pro_producto.cantidad = Number(this.Pro_producto.cantidad) + p_cantidad;
    if (Number(this.Pro_producto.cantidad < 1)) {
      this.Pro_producto.cantidad = 1;
    }
  }

  guardarProducto(){

  }

  fileUpload() {
    var reader = new FileReader();
    reader.readAsDataURL(this.el.nativeElement.files[0]);
    reader.onload = (_event) => {
      this.Pro_producto.foto = []
      this.Pro_producto.foto.push(reader.result.toString());
    }
  }
  //Validador de codigo de barras
  //Funcion de guardado
  //instalar toast
  //combobox de categorias
}
