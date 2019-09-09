import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InventariosService } from '../../Services/inventarios.service';
import { ModalController } from '@ionic/angular';
import { OrdenesCompraPage } from '../../Modals/ordenes-compra/ordenes-compra.page';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage implements OnInit {

  reporte = []

  constructor(private storage:Storage,
              private Pro_inventario:InventariosService,
              private modalController:ModalController) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_inventario.ordenesCompra(token).subscribe(report=>{
        this.reporte = report
      })
    })
  }

  async doRefresh(event) {
    this.storage.get('token').then(token=>{
      this.Pro_inventario.ordenesCompra(token).subscribe(data=>{
        this.reporte = data
        event.target.complete();
      })
    })
  }

  async verOrden(item){
    const modal = await this.modalController.create({
      component: OrdenesCompraPage,
      componentProps: {
        id_producto:item.id_producto,
        id_sucursal:item.id_sucursal
      }
    });
    await modal.present();
    await modal.onDidDismiss()
  }
}
