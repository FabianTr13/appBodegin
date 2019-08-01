import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ServiciosService } from '../../Services/servicios.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { ProductosServiciosPage } from '../../Modals/productos-servicios/productos-servicios.page';

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
      id_servicio:null
    }
  }

  productosList:[]

  constructor(private Pro_servicios:ServiciosService,
              route: ActivatedRoute,
              public modalController: ModalController) {
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
    this.productos = []
    for (let i = 0; i < data.data.productos.length; i++) {
      if (this.productos.push(data.data.productos[i]['is_check'])) {
          this.productos.push(data.data.productos[i])
      }
    }
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
