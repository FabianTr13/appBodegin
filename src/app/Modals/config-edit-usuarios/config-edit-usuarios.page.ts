import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../Services/user.service';
import { LoadingController } from '@ionic/angular';
import { ClientService } from '../../Services/client.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-config-edit-usuarios',
  templateUrl: './config-edit-usuarios.page.html',
  styleUrls: ['./config-edit-usuarios.page.scss'],
})
export class ConfigEditUsuariosPage implements OnInit {

  @Input() accion;
  @Input() id_usuario;
  usuario = {
    id_usuario:null,
    nombre:null,
    telefono: null,
    id_perfil:2,
    usuario:null
  };

  perfiles = []
  id_perfil:any = 2;
  isLoading = false

  constructor(private modalController:ModalController,
              private storage:Storage,
              private Pro_usuarios:UserService,
              private loadingController: LoadingController,
              private Pro_cliente:ClientService,
              private toastController:ToastController,
              private alertController:AlertController) { }

  ngOnInit() {
    if (this.id_usuario && this.id_usuario != null) {
      this.Pro_usuarios.getUsuario(this.id_usuario).subscribe(data=>{
        this.usuario = data
        this.id_perfil = this.usuario.id_perfil
      })
    }
    this.Pro_usuarios.getUPerfiles().subscribe(data=>{
      this.perfiles = data
    })
  }

  async perfilget(p_id_consumo){
    this.usuario.id_perfil = p_id_consumo.target.value
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

  async InsertUpdateUsuario(){
      await this.present()
      this.Pro_usuarios
      this.Pro_usuarios.validaUsuario(this.usuario.usuario, this.usuario.id_usuario).subscribe(async result=>{
        console.log(result)
        if (result) {
            if (result==true) {
              await this.Pro_usuarios.InsertUpdateUsuario(this.usuario, this.accion).catch(err=>{})
              await this.dismiss()
              this.modalController.dismiss();
            }else{
              this.showToast('Usuario no esta disponible')
              await this.dismiss()
            }
        }else{
          this.showToast('Usuario no esta disponible')
          await this.dismiss()
        }
      }, async err=>{
        this.showToast('Usuario no esta disponible')
        await this.dismiss()
      })
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 10000
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => {});
        }
      });
    });
  }

  async InhabilitarUsuario() {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario',
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
            await this.Pro_usuarios.eliminarUsuario(this.usuario.id_usuario)
            await this.modalController.dismiss()
          }
        }
      ]
    });
    await alert.present();
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
