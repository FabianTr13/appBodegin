import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigEditUsuariosPage } from './config-edit-usuarios.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
  ],
  declarations: [ConfigEditUsuariosPage],
  exports:[

  ]
})
export class ConfigEditUsuariosPageModule {}
