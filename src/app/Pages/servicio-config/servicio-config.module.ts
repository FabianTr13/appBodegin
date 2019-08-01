import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { ServicioConfigPage } from './servicio-config.page';
import { ProductosServiciosPage } from '../../Modals/productos-servicios/productos-servicios.page';
import { ProductosServiciosPageModule } from '../../Modals/productos-servicios/productos-servicios.module';

const routes: Routes = [
  {
    path: '',
    component: ServicioConfigPage
  }
];

@NgModule({
  entryComponents:[
    ProductosServiciosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosServiciosPageModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ServicioConfigPage]
})
export class ServicioConfigPageModule {}
