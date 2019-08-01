import { Component, OnInit } from '@angular/core';
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
  servicio = {
    encabezado:{
      descripcion:null,
      id_servicio:null
    },
    productos:[],
    productosList:[]
  }

  constructor(private Pro_servicios:ServiciosService,
              route: ActivatedRoute,
              private pickerCtrl: PickerController,
              public modalController: ModalController) {
    let id_servicio = route.snapshot.params["id_servicio"];
    this.Pro_servicios.servicioDetalle(id_servicio).subscribe(data=>{
      this.servicio = data;
      console.log(this.servicio)
    })
  }

  ngOnInit() {
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
        columns: this.servicio.productosList
      };
      let picker = await this.pickerCtrl.create(opts);
      picker.present();
      picker.onDidDismiss().then(async data => {
        let id_sucursal = await picker.getColumn('id_sucursal');
        let cantidad = await picker.getColumn('cantidad');
        let minimo = await picker.getColumn('minimo');

        this.servicio.productos.push(
          {
          id_sucursal: id_sucursal.options[id_sucursal.selectedIndex].value,
          sucursal: id_sucursal.options[id_sucursal.selectedIndex].text,
          cantidad: cantidad.options[cantidad.selectedIndex].value,
          minimo: minimo.options[minimo.selectedIndex].value
        });
      });
  }

  async eliminarProducto(p_item){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductosServiciosPage,
      componentProps: {
        'id_servicio': this.servicio.encabezado.id_servicio
      }
    });
    return await modal.present();
  }
}
