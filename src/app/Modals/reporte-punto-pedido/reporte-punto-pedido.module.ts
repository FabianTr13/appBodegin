import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportePuntoPedidoPage } from './reporte-punto-pedido.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../Pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    ReportePuntoPedidoPage
  ]
})
export class ReportePuntoPedidoPageModule {}
