import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigUsuarioNuevoPage } from './config-usuario-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigUsuarioNuevoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigUsuarioNuevoPage]
})
export class ConfigUsuarioNuevoPageModule {}
