import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InventarioTransaccionesPage } from './inventario-transacciones.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioTransaccionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InventarioTransaccionesPage]
})
export class InventarioTransaccionesPageModule {}
