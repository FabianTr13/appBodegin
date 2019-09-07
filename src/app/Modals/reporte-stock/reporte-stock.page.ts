import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InventariosService } from '../../Services/inventarios.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-reporte-stock',
  templateUrl: './reporte-stock.page.html',
  styleUrls: ['./reporte-stock.page.scss'],
})
export class ReporteStockPage implements OnInit {

  reporte = []

  constructor(private modalController:ModalController,
              private storage:Storage,
              private Pro_inventario:InventariosService ) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_inventario.reporteStock(token).subscribe(data=>{
        this.reporte = data
      })
    })
  }

  async doRefresh(event) {
    this.storage.get('token').then(token=>{
      this.Pro_inventario.reporteStock(token).subscribe(data=>{
        this.reporte = data
        event.target.complete();
      })
    })
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
