import { HeaderInComponent } from './header-in/header-in.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { PipesModule } from '../Pipe/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderInComponent,
    SideMenuComponent,
    HeaderModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    HeaderInComponent,
    SideMenuComponent,
    HeaderModalComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
