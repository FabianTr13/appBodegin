import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReportesPage } from './reportes.page';
import { ReportePuntoPedidoPageModule } from '../../Modals/reporte-punto-pedido/reporte-punto-pedido.module';
import { ReportePuntoPedidoPage } from '../../Modals/reporte-punto-pedido/reporte-punto-pedido.page';
import { ReporteStockPageModule } from '../../Modals/reporte-stock/reporte-stock.module';
import { ReporteStockPage } from '../../Modals/reporte-stock/reporte-stock.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesPage
  }
];

@NgModule({
  entryComponents:[
    ReportePuntoPedidoPage,
    ReporteStockPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReportePuntoPedidoPageModule,
    ReporteStockPageModule
  ],
  declarations: [ReportesPage]
})
export class ReportesPageModule {}
