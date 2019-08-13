import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientService } from '../../Services/client.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { isApp } from '../../Config/configuration';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

declare var window: any;

@Component({
  selector: 'app-config-usuarios',
  templateUrl: './config-usuarios.page.html',
  styleUrls: ['./config-usuarios.page.scss'],
})
export class ConfigUsuariosPage implements OnInit {

  cliente = {
    id_cliente: null,
    nombre_legal: null,
    nombre_comercial: null,
    rtn:null,
    telefono:null,
    direccion:null,
    usuario:null,
    foto: []
  }

  @ViewChild('fileInput') el:ElementRef;
  isLoading = false

  constructor(private Pro_cliente:ClientService,
              private storage:Storage,
              public toastController: ToastController,
              public actionSheetController: ActionSheetController,
              private camera: Camera,
              public loadingController: LoadingController,
              private modalController:ModalController) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_cliente.recuperarCliente(token).subscribe(data=>{
        this.cliente = data
        this.cliente.foto = []
        this.cliente.foto.push(data.logo)
        this.cliente.foto.push(data.logo)
        console.log(data)
      })
    })
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
     this.cliente.foto=[]
     this.cliente.foto.push(imageData)
     this.cliente.foto.push(img)
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
     this.cliente.foto=[]
     const img = window.Ionic.WebView.convertFileSrc( imageData );
     this.cliente.foto.push(imageData)
     this.cliente.foto.push(img)
   });
  }

  fileUpload() {
    var reader = new FileReader();
    reader.readAsDataURL(this.el.nativeElement.files[0]);
    reader.onload = (_event) => {
      this.cliente.foto = []
      this.cliente.foto.push(reader.result.toString());
      this.cliente.foto.push(reader.result.toString());
    }
  }

  async showToast(p_mensaje, p_duration=3000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'middle',
      showCloseButton:true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
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
    return await this.loadingController.dismiss().then(() => {});
  }

  async guardarImagen(){
    if (this.cliente.foto[0]!='assets/nuevo/camera.png') {
      let filePath: string = this.cliente.foto[0]
       this.cliente.foto[0] = filePath
    }

    if (!isApp) {
      this.cliente.foto[0] = this.el.nativeElement.files[0]
    }

    await this.Pro_cliente.subirImagen(this.cliente.foto[0], this.cliente.id_cliente).catch(err=>{})
    this.modalController.dismiss({productos: 1});
    await this.dismiss()
  }

  async updateUsuario(){
      await this.present()
      this.Pro_cliente.validaUsuario(this.cliente.id_cliente, this.cliente.usuario)
        .subscribe(async resp=>{
          if (resp!=null) {
            if (resp==true) {
              this.Pro_cliente.updateCliente(this.cliente).subscribe(async data => {
                await this.guardarImagen()
                await this.dismiss()
              }, async err=>{
                await this.dismiss()
              })
            }else {
                await this.showToast('El usuario ya existe')
                await this.dismiss()
            }
          }
          else{
            await this.dismiss()
          }
      }, async err =>{
        await this.dismiss()
      });
  }
}
