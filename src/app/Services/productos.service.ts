import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage) { }

  async nuevoProducto(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      nombre: p_form.nombre,
      descripcion: p_form.descripcion,
      codigobarra: p_form.codigo,
      id_categoria: p_form.id_categoria,
      fotografia: p_form.foto[0]
    }

    let url = `${WEB_SERVICE}api/productos/nuevoProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async updateProducto(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_producto: p_form.id_producto,
      nombre: p_form.nombre,
      descripcion: p_form.descripcion,
      codigobarra: p_form.codigo,
      id_categoria: p_form.id_categoria,
      fotografia: p_form.foto[0]
    }

    let url = `${WEB_SERVICE}api/productos/updateProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
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

  async deleteProducto(p_id_producto){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_producto : p_id_producto
    };
    let url = `${WEB_SERVICE}api/productos/deleteProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  getProducto(p_id_producto){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_producto: p_id_producto
    };
    let url = `${WEB_SERVICE}api/productos/getProducto`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
