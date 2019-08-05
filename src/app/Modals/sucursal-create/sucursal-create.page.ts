import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SucursalesService } from '../../Services/sucursales.service';

@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.page.html',
  styleUrls: ['./sucursal-create.page.scss'],
})
export class SucursalCreatePage implements OnInit {

  @Input() sucursal = {
    id_sucursal:null,
    descripcion:null,
    nombre_corto:null
  };

  @Input() accion;

  constructor(private Pro_sucursales: SucursalesService,
              public modalController: ModalController,
              public toastController: ToastController) { }

  ngOnInit() {
  }


  async InsertUpdateSucursal(){
    this.Pro_sucursales.InserUpdateDeleteSucursal(this.sucursal.id_sucursal,
      this.sucursal.descripcion,
      this.sucursal.nombre_corto,
      this.accion
    )
    this.modalController.dismiss(this.sucursal);
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
