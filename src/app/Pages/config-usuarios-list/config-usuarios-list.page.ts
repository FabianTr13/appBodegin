import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../Services/user.service';
import { ConfigEditUsuariosPage } from '../../Modals/config-edit-usuarios/config-edit-usuarios.page';

@Component({
  selector: 'app-config-usuarios-list',
  templateUrl: './config-usuarios-list.page.html',
  styleUrls: ['./config-usuarios-list.page.scss'],
})
export class ConfigUsuariosListPage implements OnInit {

  usuarios = []

  constructor(private storage:Storage,
              private Pro_usuarios:UserService,
              private modalController:ModalController) { }

  ngOnInit() {
    this.loads()
  }

  async configUsuarios(p_id_usuario, p_accion) {
    const modal = await this.modalController.create({
      component: ConfigEditUsuariosPage,
      componentProps: {
        id_usuario: p_id_usuario,
        accion: p_accion
      }
    });
    await modal.present();
    await modal.onDidDismiss()

    this.loads()
  }

  loads(){
    this.storage.get('token').then(token=>{
      this.Pro_usuarios.getUsuariosConfigList(token).subscribe(data=>{
        this.usuarios = data
      })
    })
  }

  async doRefresh(event) {
    this.loads()
    event.target.complete();
  }

}
