import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductosListPage } from './productos-list.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../Pipe/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    IonicModule,
  ],
  declarations: [ProductosListPage]
})
export class ProductosListPageModule {}
