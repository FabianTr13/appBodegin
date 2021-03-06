import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportePuntoPedidoPage } from '../../Modals/reporte-punto-pedido/reporte-punto-pedido.page';
import { ReporteStockPage } from '../../Modals/reporte-stock/reporte-stock.page';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async openStock(){
    const modal = await this.modalController.create({
      component: ReporteStockPage,
      componentProps: {}
    });

    await modal.present();
    await modal.onDidDismiss()
  }

  async openPedidos(){
    const modal = await this.modalController.create({
      component: ReportePuntoPedidoPage,
      componentProps: {}
    });

    await modal.present();
    await modal.onDidDismiss()
  }
}
