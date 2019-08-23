import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ServiciosService } from '../../Services/servicios.service';
import { ModalController } from '@ionic/angular';
import { ProductosServiciosPage } from '../../Modals/productos-servicios/productos-servicios.page';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio-config',
  templateUrl: './servicio-config.page.html',
  styleUrls: ['./servicio-config.page.scss'],
})
export class ServicioConfigPage implements OnInit {

  productos=[];

  servicio = {
    encabezado:{
      descripcion:null,
      id_servicio:null,
      precio: null
    }
  }

  productosList:[]

  constructor(private Pro_servicios:ServiciosService,
              route: ActivatedRoute,
              public modalController: ModalController,
              public alertController: AlertController,
              public toastController: ToastController,
              private Pro_router:Router) {
    this.servicio.encabezado.id_servicio = route.snapshot.params["id_servicio"];
    this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(data=>{
      this.servicio = data;
      this.productos = []
      this.productos = data.productos;
    })
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductosServiciosPage,
      componentProps: {
        'id_servicio': this.servicio.encabezado.id_servicio
      }
    });
    await modal.present();
    let data  = await modal.onDidDismiss()

    if (data.data != undefined) {
      this.productos = []
      this.productos = data.data.productos
    }
  }

  async updadeServicio(p_accion) {
    const alert = await this.alertController.create({
      header: 'Cambiar nombre',
      inputs: [
        {
          name: 'input',
          type: 'text',
          value: this.servicio.encabezado.descripcion,
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        }, {
          text: 'Cambiar',
          handler: async data=> {
            if (data.input != null && data.input.trim().length) {
              await this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio, p_accion, data.input).catch(err=>{})
              this.servicio.encabezado.descripcion = data.input
            }
            else{
              await this.showToast('Nombre vacio');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async updadeServicioCosto() {
    const alert = await this.alertController.create({
      header: 'Cambiar precio',
      inputs: [
        {
          name: 'input',
          type: 'text',
          value: this.servicio.encabezado.precio,
          placeholder: 'Precio'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        }, {
          text: 'Cambiar',
          handler: async data=> {
            if (data.input != null && data.input.trim().length) {
              if(this.IsNumeric(data.input)){
                await this.Pro_servicios.updateCosto(this.servicio.encabezado.id_servicio, data.input).catch(err=>{})
                this.servicio.encabezado.precio = data.input
              }
              else{
                  await this.showToast('Precio no valido');
              }
            }
            else{
              await this.showToast('Precio vacio');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  IsNumeric(input){
    return (input - 0) == input && (''+input).trim().length > 0;
  }

  async servicioDelete() {
    const alert = await this.alertController.create({
      header: 'Eliminar Servicio',
      message: `Esta seguro que desea eliminar ${this.servicio.encabezado.descripcion}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Eliminar',
          handler: async data => {
            await this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio, 'DELETE', null).catch(err=>{})
            this.Pro_router.navigate(['/servicios']).then(()=>{
              window.location.reload();
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast(p_mensaje, p_duration=3000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  async doRefresh(event) {
    this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(data=>{
      this.servicio = data;
      event.target.complete();
    }, err=>{
      event.target.complete();
    })
 }
}
