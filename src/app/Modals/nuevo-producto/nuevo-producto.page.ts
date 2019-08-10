import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, NavController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductosService } from '../../Services/productos.service';
import { CategoriasService } from '../../Services/categorias.service';
import { Storage } from '@ionic/storage';
import * as resizebase64 from 'resize-base64';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
declare var window: any;

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {
  @ViewChild('fileInput') el:ElementRef;

  Pro_producto = {
    foto: [
      'assets/nuevo/camera.png',
      'assets/nuevo/camera.png'
    ],
    nombre:null,
    codigo:null,
    descripcion: null,
    id_categoria: null,
    id_tipo_consumo:null
  }

  categorias = []
  tiposConsumo = []
  id_consumo = 1;
  id_categoria;
  isLoading = false

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner,
              private Pro_productos:ProductosService,
              private Pro_categorias:CategoriasService,
              private storage:Storage,
              public modalController: ModalController,
              public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.storage.get('token').then(async token=>{
      this.Pro_categorias.obtenerCategorias(token).subscribe(data=>{
        this.categorias = data
      })
      this.Pro_productos.getTiposConsumo(token).subscribe(data=>{
        this.tiposConsumo = data
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
    quality: 20,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.CAMERA
  }

    this.camera.getPicture(options).then((imageData) => {
     const img = window.Ionic.WebView.convertFileSrc( imageData );
     this.Pro_producto.foto=[]
     this.Pro_producto.foto.push(imageData)
     this.Pro_producto.foto.push(img)
    });
  }

  loadImage(){
    const options: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.Pro_producto.foto=[]
     const img = window.Ionic.WebView.convertFileSrc( imageData );
     this.Pro_producto.foto.push(imageData)
     this.Pro_producto.foto.push(img)
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

  async categroriaGet(p_sls){
    this.Pro_producto.id_categoria = p_sls.target.value
  }

  async consumoGet(p_tipo){
    this.Pro_producto.id_tipo_consumo = p_tipo.target.value
  }

  fileUpload() {
    var reader = new FileReader();
    reader.readAsDataURL(this.el.nativeElement.files[0]);
    reader.onload = (_event) => {
      this.Pro_producto.foto = []
      this.Pro_producto.foto.push(reader.result.toString());
      this.Pro_producto.foto.push(reader.result.toString());
    }
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 10000
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async guardar(){
    await this.present()
    if (this.Pro_producto.foto[0]!='assets/nuevo/camera.png') {
      let filePath: string = this.Pro_producto.foto[0]
      this.Pro_producto.foto[0] = filePath;
    }
    else{
      this.Pro_producto.foto[0] = null
    }

    if (!isApp) {
      this.Pro_producto.foto[0] = this.el.nativeElement.files[0]
    }

    let producto_id = await this.Pro_productos.nuevoProducto(this.Pro_producto).catch(err=>{
      console.log(err)
    })

    await this.Pro_productos.subirImagen(this.Pro_producto.foto[0], producto_id).catch(err=>{})
    await this.dismiss()
    this.modalController.dismiss({id_producto:producto_id});
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
