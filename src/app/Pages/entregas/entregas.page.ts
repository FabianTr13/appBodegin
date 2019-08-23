import { Component, OnInit } from '@angular/core';
import { EntregasService } from '../../Services/entregas.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {

  servicios = []

  constructor(private Pro_entregas:EntregasService,
              private storage:Storage,
              public toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_entregas.getSetvicios(token).subscribe(data=>{
        this.servicios = data
      })
    })
  }

  async doRefresh(event) {
    this.storage.get('token').then(token=>{
      this.Pro_entregas.getSetvicios(token).subscribe(data=>{
        this.servicios = data
        event.target.complete();
      }, err=>{
        event.target.complete();
      })
    })
  }

  async entregarServicio(p_id_servicio){
    let result = await this.Pro_entregas.realizarEntrega(p_id_servicio);
    console.log(result)
    if (result==false) {
      await this.showToast('El inventario no es sufuciente', 4000)
    }
    else{
      await this.showToast('Entrega realizada con exito', 1500)
    }
  }

  async showToast(p_mensaje, p_duration=2000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }
}
