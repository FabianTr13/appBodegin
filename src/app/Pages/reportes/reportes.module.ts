import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReportePuntoPedidoPageModule } from '../../Modals/reporte-punto-pedido/reporte-punto-pedido.module';
import { ReportePuntoPedidoPage } from '../../Modals/reporte-punto-pedido/reporte-punto-pedido.page';
import { IonicModule } from '@ionic/angular';
import { ReportesPage } from './reportes.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesPage
  }
];

@NgModule({
  entryComponents:[
    ReportePuntoPedidoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportePuntoPedidoPageModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ReportesPage]
})
export class ReportesPageModule {}
