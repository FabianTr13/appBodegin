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
    logo: null
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
     this.cliente.logo=[]
     this.cliente.logo.push(imageData)
     this.cliente.logo.push(img)
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
     this.cliente.logo=[]
     const img = window.Ionic.WebView.convertFileSrc( imageData );
     this.cliente.logo.push(imageData)
     this.cliente.logo.push(img)
   });
  }

  fileUpload() {
    var reader = new FileReader();
    reader.readAsDataURL(this.el.nativeElement.files[0]);
    reader.onload = (_event) => {
      this.cliente.logo = []
      this.cliente.logo.push(reader.result.toString());
      this.cliente.logo.push(reader.result.toString());
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
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async guardar(){
    await this.present()
    if (this.cliente.logo[0]!='assets/nuevo/camera.png') {
      let filePath: string = this.cliente.logo[0]
       this.cliente.logo[0] = filePath
    }

    if (!isApp) {
      this.cliente.logo[0] = this.el.nativeElement.files[0]
    }

    await this.Pro_cliente.updateCliente(this.cliente).catch(err=>{
      console.log(err)
    })

    await this.Pro_cliente.subirImagen(this.cliente.logo[0], this.cliente.id_cliente).catch(err=>{})
    this.modalController.dismiss({productos: 1});
    await this.dismiss()
  }
}
