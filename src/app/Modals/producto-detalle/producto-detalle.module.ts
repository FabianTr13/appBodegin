import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductoDetallePage } from './producto-detalle.page';
import { PipesModule } from '../../Pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [ProductoDetallePage],
  exports:[

  ]
})
export class ProductoDetallePageModule {}
