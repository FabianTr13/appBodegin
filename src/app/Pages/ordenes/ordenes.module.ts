import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../Pipe/pipes.module';
import { OrdenesCompraPageModule } from '../../Modals/ordenes-compra/ordenes-compra.module';
import { OrdenesCompraPage } from '../../Modals/ordenes-compra/ordenes-compra.page';

import { IonicModule } from '@ionic/angular';

import { OrdenesPage } from './ordenes.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesPage
  }
];

@NgModule({
  entryComponents:[
    OrdenesCompraPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    OrdenesCompraPageModule
  ],
  declarations: [OrdenesPage]
})
export class OrdenesPageModule {}
