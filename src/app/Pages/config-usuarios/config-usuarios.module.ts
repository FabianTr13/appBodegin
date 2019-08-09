import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../Pipe/pipes.module';

import { IonicModule } from '@ionic/angular';

import { ConfigUsuariosPage } from './config-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigUsuariosPage]
})
export class ConfigUsuariosPageModule {}
