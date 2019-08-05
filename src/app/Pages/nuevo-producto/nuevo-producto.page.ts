import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PickerController } from '@ionic/angular';
import { ProductosService } from '../../Services/productos.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { CategoriasService } from '../../Services/categorias.service';
import { Storage } from '@ionic/storage';

declare var window:any;

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {
  @ViewChild('fileInput') el:ElementRef;
  Pro_producto = {
    foto: [
      'assets/nuevo/camera.png'
    ],
    nombre:null,
    codigo:null,
    descripcion: null,
    categoria: null
  }

  categorias = []

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner,
              private pickerCtrl: PickerController,
              private Pro_producto_service:ProductosService,
              private base64: Base64,
              private Pro_categorias:CategoriasService,
              private storage:Storage) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_categorias.obtenerCategorias(token).subscribe(data=>{
        this.categorias = data
      })
    })
  }

  barCodeScanner(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.Pro_producto.codigo = barcodeData.text
    }).catch(err => {
        console.log('Error', err);
    });
  }

  take(){
    const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.CAMERA
  }

    this.camera.getPicture(options).then((imageData) => {

     // const img = window.Ionic.WebView.convertFileSrc(imageData);
     let base64Image = "data:image/jpeg;base64,"+imageData;

     this.Pro_producto.foto=[]
     this.Pro_producto.foto.push(base64Image)
    });
  }

  loadImage(){
    const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
  }

    this.camera.getPicture(options).then((imageData) => {
     // const img = window.Ionic.WebView.convertFileSrc(imageData);
     let base64Image = "data:image/jpeg;base64,"+imageData;

     this.Pro_producto.foto=[]
     this.Pro_producto.foto.push(base64Image)
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
            this.loadImage();
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
    }
  }

  fileUpload() {
    var reader = new FileReader();
    reader.readAsDataURL(this.el.nativeElement.files[0]);
    reader.onload = (_event) => {
      this.Pro_producto.foto = []
      this.Pro_producto.foto.push(reader.result.toString());
    }
  }

  async guardar(){
      this.pro
  }
}
