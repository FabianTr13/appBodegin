import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';
import { ProductosService } from '../../Services/productos.service';
import { Base64 } from '@ionic-native/base64/ngx';

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
    categoria: null,
    costo: null,
    sucursales: [
      {
        id_sucursal:"1",
        sucursal: "LOCAL",
        cantidad: "1",
        minimo:"1"
      }
    ]
  }

  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private barcodeScanner: BarcodeScanner,
              private pickerCtrl: PickerController,
              private Pro_producto_service:ProductosService,
              private base64: Base64) { }

  ngOnInit() {
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
     console.log(this.Pro_producto.foto)
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

  async showAdvancedPicker() {
    let opts: PickerOptions = {
      cssClass: 'academy-picker',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Agregar',
          cssClass: 'special-done'
        }
      ],
      columns: [
        {
          name: 'id_sucursal',
          options: [
            { text: 'SPS', value: 1 },
            { text: 'TEG', value: 2 },
            { text: 'CEB', value: 3 }
          ]
        },
        {
          name: 'cantidad',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 }
          ]
        },
        {
          name: 'minimo',
          options: [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let id_sucursal = await picker.getColumn('id_sucursal');
      let cantidad = await picker.getColumn('cantidad');
      let minimo = await picker.getColumn('minimo');

      this.Pro_producto.sucursales.push(
        {
        id_sucursal: id_sucursal.options[id_sucursal.selectedIndex].value,
        sucursal: id_sucursal.options[id_sucursal.selectedIndex].text,
        cantidad: cantidad.options[cantidad.selectedIndex].value,
        minimo: minimo.options[minimo.selectedIndex].value
      });
    });
  }

  async guardar(){
      let filePath: string = this.Pro_producto.foto[0];
      this.base64.encodeFile(filePath).then((base64File: string) => {
        console.log(base64File);
      }, (err) => {
        console.log(err);
      });

    // this.Pro_producto_service.nuevoProducto(this.Pro_producto).subscribe(data=>{
    //   console.log('Termine', data)
    // }, err =>{
    //   console.log(err)
    // })
  }
  //Validador de codigo de barras
  //Funcion de guardado
  //instalar toast
  //combobox de categorias hacerlo picker
  //sucursal con acronimo
}
