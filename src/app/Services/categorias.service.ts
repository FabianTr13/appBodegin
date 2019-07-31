import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage) { }

  obtenerCategorias(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/categorias/categoriasList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async obtenerCategoriasAsync(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token:  await this.storage.get('token'), 
    };
    let url = `${WEB_SERVICE}api/categorias/categoriasList`

    return this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async InsertUpdateDeleteCategoria(p_id_categoria, p_descripcion, p_accion){
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_categoria: p_id_categoria,
      nombre: p_descripcion,
      accion: p_accion
    };
    let url = `${WEB_SERVICE}api/categorias/insertUpdateDeleteCategoria`

    return await this.Pro_http.post(url, body, { headers }).toPromise();
  }
}
