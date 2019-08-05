import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductosService } from '../../Services/productos.service';
import { CategoriasService } from '../../Services/categorias.service';
import { Storage } from '@ionic/storage';
import * as resizebase64 from 'resize-base64';

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
    id_categoria: null
  }

  categorias = []

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner,
              private Pro_productos:ProductosService,
              private Pro_categorias:CategoriasService,
              private storage:Storage) {
  }

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

  async categroriaGet(p_sls){
    this.Pro_producto.id_categoria = p_sls.target.value
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
    let filePath: string = this.Pro_producto.foto[0]
     this.Pro_producto.foto[0] = resizebase64(filePath, 500, 450);
    await this.Pro_productos.nuevoProducto(this.Pro_producto).catch(err=>{
      console.log(err)
    })
  }
}
