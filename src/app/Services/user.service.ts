import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Pro_http:HttpClient) { }

  login(p_usuario, p_password){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      usuario:p_usuario,
      password:p_password
    }
    let url = `${WEB_SERVICE}api/usuarios/login`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  confirmarCelular(p_numero){
    const headers = new HttpHeaders(Header);
    let body = {
      celular:p_numero
    }

    let url = `${WEB_SERVICE}api/usuarios/validaCelular`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  cambiarPassword(p_id_usuario, p_password){
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:p_id_usuario,
      password:p_password
    }

    let url = `${WEB_SERVICE}api/usuarios/cambiarPassword`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getUsuariosList(p_token, p_id_sucursal){
    const headers = new HttpHeaders(Header);
    let body = {
      token: p_token,
      id_sucursal:p_id_sucursal
    }

    let url = `${WEB_SERVICE}api/usuarios/usuariosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
