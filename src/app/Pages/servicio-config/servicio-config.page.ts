import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ServiciosService } from '../../Services/servicios.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';

@Component({
  selector: 'app-servicio-config',
  templateUrl: './servicio-config.page.html',
  styleUrls: ['./servicio-config.page.scss'],
})
export class ServicioConfigPage implements OnInit {

  id_servicio;
  servicio = {}
  constructor(private Pro_servicios:ServiciosService,
              route: ActivatedRoute,
              private pickerCtrl: PickerController) {
    this.id_servicio = route.snapshot.params["id_servicio"];
    this.Pro_servicios.servicioDetalle(this.id_servicio).subscribe(data=>{
      this.servicio = data;
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
}
