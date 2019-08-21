import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../../Pipe/pipes.module';

import { IonicModule } from '@ionic/angular';

import { EntregasPage } from './entregas.page';

const routes: Routes = [
  {
    path: '',
    component: EntregasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [EntregasPage]
})
export class EntregasPageModule {}
