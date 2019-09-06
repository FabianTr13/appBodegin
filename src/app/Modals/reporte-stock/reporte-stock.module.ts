import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReporteStockPage } from './reporte-stock.page';
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
  declarations: [ReporteStockPage]
})
export class ReporteStockPageModule {}
