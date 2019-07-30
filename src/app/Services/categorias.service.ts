import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private Pro_http:HttpClient) { }

  obtenerCategorias(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: "1"
    };
    let url = `${WEB_SERVICE}api/categorias/categoriasList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  insertCategoria(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: "1",
      nombre: ""
    };
    let url = `${WEB_SERVICE}api/categorias/insertCategoria`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  UpdateDeleteCategoria(p_accion){
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: "1",
      id_categoria: 1,
      accion: p_accion
    };
    let url = `${WEB_SERVICE}api/categorias/updateDeleteCategoria`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
