import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProductoPageModule } from '../../Modals/nuevo-producto/nuevo-producto.module';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  entryComponents:[
    NuevoProductoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProductoPageModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
