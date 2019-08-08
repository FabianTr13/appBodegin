import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'reset-pass', loadChildren: './Pages/reset-pass/reset-pass.module#ResetPassPageModule'},
  // { path: 'nuevo', loadChildren: './Pages/nuevo-producto/nuevo-producto.module#NuevoProductoPageModule', canActivate :[AuthGuard], data: {token: []} },
  // { path: 'producto-detalle/:id_producto', loadChildren: './Pages/producto-detalle/producto-detalle.module#ProductoDetallePageModule' , canActivate :[AuthGuard], data: {token: []} },
  { path: 'entregas', loadChildren: './Pages/entregas/entregas.module#EntregasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'inventarios', loadChildren: './Pages/inventarios/inventarios.module#InventariosPageModule', canActivate :[AuthGuard], data: {token: []} },
  // { path: 'inventarios/:id_reload', loadChildren: './Pages/inventarios/inventarios.module#InventariosPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'estadisticas', loadChildren: './Pages/estadisticas/estadisticas.module#EstadisticasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'reportes', loadChildren: './Pages/reportes/reportes.module#ReportesPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'categorias', loadChildren: './Pages/categorias/categorias.module#CategoriasPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'servicios', loadChildren: './Pages/servicios/servicios.module#ServiciosPageModule', canActivate :[AuthGuard], data: {token: []} },
  { path: 'servicio-config/:id_servicio', loadChildren: './Pages/servicio-config/servicio-config.module#ServicioConfigPageModule',canActivate :[AuthGuard], data: {token: []} },  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' },
  { path: 'sucursales', loadChildren: './Pages/sucursales/sucursales.module#SucursalesPageModule' ,canActivate :[AuthGuard], data: {token: []} },
  { path: 'inventario-transacciones', loadChildren: './Pages/inventario-transacciones/inventario-transacciones.module#InventarioTransaccionesPageModule' },
  { path: 'config', loadChildren: './Pages/config-usuarios/config-usuarios.module#ConfigUsuariosPageModule' ,canActivate :[AuthGuard], data: {token: []} },
  { path: 'config-edit-usuarios', loadChildren: './Pages/config-edit-usuarios/config-edit-usuarios.module#ConfigEditUsuariosPageModule' },
  { path: 'config-usuario-nuevo', loadChildren: './Pages/config-usuario-nuevo/config-usuario-nuevo.module#ConfigUsuarioNuevoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
