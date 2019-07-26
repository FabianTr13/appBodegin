import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  // { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'reset-pass', loadChildren: './Pages/reset-pass/reset-pass.module#ResetPassPageModule' },
  { path: 'nuevo', loadChildren: './Pages/nuevo-producto/nuevo-producto.module#NuevoProductoPageModule' },
  { path: 'entregas', loadChildren: './Pages/entregas/entregas.module#EntregasPageModule' },
  { path: 'inventarios', loadChildren: './Pages/inventarios/inventarios.module#InventariosPageModule' },
  { path: 'estadisticas', loadChildren: './Pages/estadisticas/estadisticas.module#EstadisticasPageModule' },
  { path: 'reportes', loadChildren: './Pages/reportes/reportes.module#ReportesPageModule' },
  { path: 'categorias', loadChildren: './Pages/categorias/categorias.module#CategoriasPageModule' },
  { path: 'servicios', loadChildren: './Pages/servicios/servicios.module#ServiciosPageModule' },
  { path: 'producto-detalle', loadChildren: './Pages/producto-detalle/producto-detalle.module#ProductoDetallePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
