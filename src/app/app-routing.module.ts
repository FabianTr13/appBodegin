import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'reset-pass', loadChildren: './Pages/reset-pass/reset-pass.module#ResetPassPageModule'},
  { path: 'entregas', loadChildren: './Pages/entregas/entregas.module#EntregasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'inventarios', loadChildren: './Pages/inventarios/inventarios.module#InventariosPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'estadisticas', loadChildren: './Pages/estadisticas/estadisticas.module#EstadisticasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'reportes', loadChildren: './Pages/reportes/reportes.module#ReportesPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'categorias', loadChildren: './Pages/categorias/categorias.module#CategoriasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'servicios', loadChildren: './Pages/servicios/servicios.module#ServiciosPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'servicio-config/:id_servicio', loadChildren: './Pages/servicio-config/servicio-config.module#ServicioConfigPageModule',canActivate :[AuthGuard], data: {token: []} },  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' },
  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' ,canActivate :[AuthGuard], data: {token: []} },
  { path: 'transacciones', loadChildren: './Pages/inventario-transacciones/inventario-transacciones.module#InventarioTransaccionesPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'config', loadChildren: './Pages/config-usuarios/config-usuarios.module#ConfigUsuariosPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'configUsuariosList', loadChildren: './Pages/config-usuarios-list/config-usuarios-list.module#ConfigUsuariosListPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'pagos', loadChildren: './Pages/pagos/pagos.module#PagosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
