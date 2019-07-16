import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';

import { IonicModule } from '@ionic/angular';

import { ResetPassPage } from './reset-pass.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RecaptchaModule.forRoot(),
    ComponentsModule
  ],
  exports: [
         RecaptchaModule
      ],
  declarations: [ResetPassPage]
})
export class ResetPassPageModule {}
