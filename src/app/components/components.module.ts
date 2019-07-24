import { HeaderInComponent } from './header-in/header-in.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderInComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    HeaderInComponent,
    SideMenuComponent
  ]
})
export class ComponentsModule { }
