import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { InventarioTransaccionesPage } from './inventario-transacciones.page';
import { PipesModule } from '../../Pipe/pipes.module';
import { ProductosListPageModule } from '../../Modals/productos-list/productos-list.module';
import { ProductosListPage } from '../../Modals/productos-list/productos-list.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioTransaccionesPage
  }
];

@NgModule({
  entryComponents:[
    ProductosListPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    ProductosListPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InventarioTransaccionesPage]
})
export class InventarioTransaccionesPageModule {}
