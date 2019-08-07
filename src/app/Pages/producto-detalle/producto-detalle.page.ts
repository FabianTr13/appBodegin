import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductosService } from '../../Services/productos.service';
import { CategoriasService } from '../../Services/categorias.service';
import { Storage } from '@ionic/storage';
import * as resizebase64 from 'resize-base64';
import {ActivatedRoute} from '@angular/router';
import { SucursalesService } from '../../Services/sucursales.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})

export class ProductoDetallePage implements OnInit {
  @ViewChild('fileInput') el:ElementRef;
  Pro_producto = {
    id_producto:null,
    foto: [
      'assets/nuevo/camera.png'
    ],
    nombre:null,
    codigo:null,
    descripcion: null,
    id_categoria: null
  }

  categorias = []
  id_categoria:any;
  inventarios = []
  sucursal:any;

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner,
              private Pro_productos:ProductosService,
              private Pro_categorias:CategoriasService,
              private storage:Storage,
              private route: ActivatedRoute,
              private Pro_sucursales:SucursalesService,
              public alertController: AlertController,
              public router:Router) {
  }

  ngOnInit() {
    this.iniciar()
  }

  iniciar(){
    let id_producto = this.route.snapshot.params["id_producto"];
    this.Pro_productos.getProducto(id_producto).subscribe(async data=>{
      this.Pro_producto = data
      this.Pro_producto.foto = []
      this.Pro_producto.foto.push(data.fotografia)
      this.id_categoria = this.Pro_producto.id_categoria

      this.sucursal =
        await this.Pro_sucursales.obtenerSucursalSelecciondaAsync().catch(err=>{
      })

      let inventario_list =
        await this.Pro_productos.inventarioTransacciones(data.id_producto, this.sucursal).catch(err=>{
      })
      this.inventarios = Array.isArray(inventario_list) ? inventario_list : []

      let categorias_list =
        await this.Pro_categorias.obtenerCategoriasAsync().catch(err=>{
      })
      this.categorias = Array.isArray(categorias_list) ? categorias_list : []
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

  async doRefresh(event) {
    let sucursal =
      await this.Pro_sucursales.obtenerSucursalSelecciondaAsync().catch(err=>{
    })

    let inventario_list =
      await this.Pro_productos.inventarioTransacciones(this.Pro_producto.id_producto, sucursal).catch(err=>{
    })
    this.inventarios = Array.isArray(inventario_list) ? inventario_list : []

    event.target.complete();
  }

  async sucursalesSelect(){
    let sucursales = []

    let sucursales_list = await this.Pro_sucursales.sucursalesListUsuario();
    if (Array.isArray(sucursales_list)) {
      for (let i = 0; i < sucursales_list.length; i++) {
        sucursales.push({
          type:'radio',
          label: sucursales_list[i].descripcion,
          value: sucursales_list[i].id_sucursal
        })
      }
    }

    let alert = await this.alertController.create({
      header: 'Sucursales',
      inputs: sucursales,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Cambiar',
          handler: async data=> {
            if (Array.isArray(sucursales_list)) {
              this.sucursal =  sucursales_list.filter(item=> item.id_sucursal == data)[0]
              let inventario_list =
                await this.Pro_productos.inventarioTransacciones(this.Pro_producto.id_producto, this.sucursal).catch(err=>{
              })
              this.inventarios = Array.isArray(inventario_list) ? inventario_list : []
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteProducto() {
    const alert = await this.alertController.create({
      header: 'Eliminar Producto',
      message: `Esta seguro que desea eliminar`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Eliminar',
          handler: async data => {
            await this.Pro_productos.deleteProducto(this.Pro_producto.id_producto).catch(err=>{})
            this.router.navigate(['']).then(()=>{
              window.location.reload();
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async guardar(){
    let filePath: string = this.Pro_producto.foto[0]
     this.Pro_producto.foto[0] = resizebase64(filePath, 500, 450);
    await this.Pro_productos.updateProducto(this.Pro_producto).catch(err=>{
      console.log(err)
    })
  }
}
