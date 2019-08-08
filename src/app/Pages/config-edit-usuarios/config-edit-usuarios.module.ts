import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigEditUsuariosPage } from './config-edit-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigEditUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigEditUsuariosPage]
})
export class ConfigEditUsuariosPageModule {}
