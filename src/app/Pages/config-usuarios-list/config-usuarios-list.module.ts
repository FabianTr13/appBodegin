import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { ConfigUsuariosListPage } from './config-usuarios-list.page';
import { ConfigEditUsuariosPageModule } from '../../Modals/config-edit-usuarios/config-edit-usuarios.module';
import { ConfigEditUsuariosPage } from '../../Modals/config-edit-usuarios/config-edit-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigUsuariosListPage
  }
];

@NgModule({

    entryComponents:[
      ConfigEditUsuariosPage
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigEditUsuariosPageModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigUsuariosListPage]
})
export class ConfigUsuariosListPageModule {}
