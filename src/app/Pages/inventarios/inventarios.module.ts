import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';
import { NuevoProductoPageModule } from '../../Modals/nuevo-producto/nuevo-producto.module';
import { ProductoDetallePage } from '../../Modals/producto-detalle/producto-detalle.page';
import { ProductoDetallePageModule } from '../../Modals/producto-detalle/producto-detalle.module';

import { IonicModule } from '@ionic/angular';

import { InventariosPage } from './inventarios.page';

const routes: Routes = [
  {
    path: '',
    component: InventariosPage
  }
];

@NgModule({
  entryComponents:[
    NuevoProductoPage,
    ProductoDetallePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoDetallePageModule,
    NuevoProductoPageModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [InventariosPage]
})
export class InventariosPageModule {}
