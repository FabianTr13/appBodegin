import { Component, OnInit } from '@angular/core';
import { InventariosService } from '../../Services/inventarios.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-punto-pedido',
  templateUrl: './reporte-punto-pedido.page.html',
  styleUrls: ['./reporte-punto-pedido.page.scss'],
})
export class ReportePuntoPedidoPage implements OnInit {

  reporte = []

  constructor(private Pro_inventario:InventariosService,
              private storage:Storage,
              private modalController:ModalController) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_inventario.reporteStock(token).subscribe(report=>{
        this.reporte = report
      })
    })
  }
}
