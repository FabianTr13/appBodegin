import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SucursalesPage } from './sucursales.page';
import { SucursalCreatePage } from '../../Modals/sucursal-create/sucursal-create.page';
import { SucursalCreatePageModule } from '../../Modals/sucursal-create/sucursal-create.module';

const routes: Routes = [
  {
    path: '',
    component: SucursalesPage
  }
];

@NgModule({
  entryComponents:[
    SucursalCreatePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucursalCreatePageModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [SucursalesPage]
})
export class SucursalesPageModule {}
