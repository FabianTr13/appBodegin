import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'reset-pass', loadChildren: './Pages/reset-pass/reset-pass.module#ResetPassPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
