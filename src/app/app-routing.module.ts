import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { PagosGuard } from './Guard/pagos.guard';
import { RolesGuard } from './Guard/roles.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate :[AuthGuard, PagosGuard], data: {token: []} },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'reset-pass', loadChildren: './Pages/reset-pass/reset-pass.module#ResetPassPageModule'},
  { path: 'entregas', loadChildren: './Pages/entregas/entregas.module#EntregasPageModule', canActivate :[AuthGuard, PagosGuard], data: {token: []} },
  { path: 'inventarios', loadChildren: './Pages/inventarios/inventarios.module#InventariosPageModule', canActivate :[AuthGuard, PagosGuard], data: {token: []} },
  { path: 'estadisticas', loadChildren: './Pages/estadisticas/estadisticas.module#EstadisticasPageModule', canActivate :[AuthGuard, PagosGuard], data: {token: []} },
  { path: 'reportes', loadChildren: './Pages/reportes/reportes.module#ReportesPageModule', canActivate :[AuthGuard, PagosGuard], data: {token: []} },
  { path: 'categorias', loadChildren: './Pages/categorias/categorias.module#CategoriasPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'servicios', loadChildren: './Pages/servicios/servicios.module#ServiciosPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'servicio-config/:id_servicio', loadChildren: './Pages/servicio-config/servicio-config.module#ServicioConfigPageModule',canActivate :[AuthGuard, RolesGuard], data: {token: []} },  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' },
  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' ,canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'transacciones', loadChildren: './Pages/inventario-transacciones/inventario-transacciones.module#InventarioTransaccionesPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'config', loadChildren: './Pages/config-usuarios/config-usuarios.module#ConfigUsuariosPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'configUsuariosList', loadChildren: './Pages/config-usuarios-list/config-usuarios-list.module#ConfigUsuariosListPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  { path: 'pagos', loadChildren: './Pages/pagos/pagos.module#PagosPageModule', canActivate :[AuthGuard, RolesGuard], data: {token: []} },
  { path: 'ordenes', loadChildren: './Pages/ordenes/ordenes.module#OrdenesPageModule', canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
  // { path: 'ordenes-compra', loadChildren: './Modals/ordenes-compra/ordenes-compra.module#OrdenesCompraPageModule' , canActivate :[AuthGuard, PagosGuard, RolesGuard], data: {token: []} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
