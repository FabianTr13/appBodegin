import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private Pro_http:HttpClient) { }

  validarNuevoCliente(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      nombre_legal:p_form.nombreLegal,
      rtn:p_form.rtn,
      celular: p_form.phone,
      usuario: p_form.user
    }
    let url = `${WEB_SERVICE}api/clientes/validanuevocliente`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
  registraUsuario(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      nombre_comercial: p_form.nombreComercial,
      nombre_legal:p_form.nombreLegal,
      logo:p_form.logo,
      rtn:p_form.rtn,
      direccion:p_form.direccion,
      celular:p_form.phone,
      usuario:p_form.user,
      clave:p_form.password
    }
    let url = `${WEB_SERVICE}api/clientes/CrearCliente`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
