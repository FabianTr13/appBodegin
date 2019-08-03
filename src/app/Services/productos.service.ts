import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private Pro_http:HttpClient) { }

  nuevoProducto(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = p_form;
    let url = `${WEB_SERVICE}api/productos/nuevoProducto`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  listaProductos(p_token, p_idServicio){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      id_servicio:p_idServicio,
      token: p_token
    };
    let url = `${WEB_SERVICE}api/productos/productosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  inventarioList(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/productos/inventarioList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async inventarioListAsync(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: await this.storage.get('token')
    };
    let url = `${WEB_SERVICE}api/productos/inventarioList`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }
}

//
// {
// 	"token": "patito" ,
// 	"nombre": "hola",
// 	"descripcion": "hola",
// 	"codigobarra": "ee",
//     "id_categoria": 1,
//     "fotografia": "dddd",
//     "sucursales": [
//     	{
//     		"id_sucursal": 1,
//     		"cantidad": 1,
//     		"minimo": 1
//     	}
//     	],
//     "costo": 23
// }
