import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdenesCompraPage } from './ordenes-compra.page';
import { PipesModule } from '../../Pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  declarations: [OrdenesCompraPage]
})
export class OrdenesCompraPageModule {}
