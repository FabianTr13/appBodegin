import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage) { }

  obtenerSucursales(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/sucursales/sucursalesList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async obtenerSucursalesAsync(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token:  await this.storage.get('token'),
    };
    let url = `${WEB_SERVICE}api/sucursales/sucursalesList`

    return this.Pro_http.post(url, body, { headers }).toPromise()
  }


  async InserUpdateDeleteSucursal(p_id_sucursal, p_descripcion, p_smallName, p_direccion, p_telefono, p_accion){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_sucursal: p_id_sucursal,
      nombre: p_descripcion,
      nombre_corto:p_smallName,
      direccion: p_direccion,
      telefono: p_telefono,
      accion: p_accion
    };
    let url = `${WEB_SERVICE}api/sucursales/insertUpdateDeleteSucursales`

    return await this.Pro_http.post(url, body, { headers }).toPromise();
  }

  obtenerSucursalSeleccionda(p_token){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/sucursales/obtenerSucursalSeleccionada`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async obtenerSucursalSelecciondaAsync(){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token')
    };
    let url = `${WEB_SERVICE}api/sucursales/obtenerSucursalSeleccionada`

    return await this.Pro_http.post(url, body, { headers }).toPromise();
  }

  async sucursalesListUsuario(){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token')
    };
    let url = `${WEB_SERVICE}api/sucursales/sucursalesListUsuario`

    return this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async insertSucursalUsuario(p_usuarios, p_id_sucursal){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      usuarios: p_usuarios,
      id_sucursal: p_id_sucursal
    };
    let url = `${WEB_SERVICE}api/sucursales/sucursalesInsertUsuarios`

    return this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async updateSucursalSeleccionda(p_id_sucursal){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_sucursal: p_id_sucursal
    };
    let url = `${WEB_SERVICE}api/sucursales/updateSucursalSeleccionada`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }
}
