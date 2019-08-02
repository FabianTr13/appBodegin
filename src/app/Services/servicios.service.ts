import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage) { }

  serviciosList(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: p_token
    };

    let url = `${WEB_SERVICE}api/servicios/serviciosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async serviciosListAsync(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token')
    };

    let url = `${WEB_SERVICE}api/servicios/serviciosList`
    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

   servicioDetalle(p_id_servicio){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_servicio: p_id_servicio
    };

    let url = `${WEB_SERVICE}api/servicios/serviciosDetalle`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async updateProductos(p_id_servicio, p_productos){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_servicio: p_id_servicio,
      productos: p_productos
    };

    let url = `${WEB_SERVICE}api/servicios/updateProductosServicios`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async updateNombre(p_id_servicio, p_accion, p_nombre){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_servicio: p_id_servicio,
      accion: p_accion,
      descripcion: p_nombre
    };

    let url = `${WEB_SERVICE}api/servicios/updateNombre`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }
  //--------------------

  async insertServicio(p_nombre){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      nombre: p_nombre
    };

    let url = `${WEB_SERVICE}api/servicios/insertServicio`

    return this.Pro_http.post(url, body, { headers }).toPromise()
  }

  updateServicio(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: "",
      nombre: "",
      id_servicio: 1,
      productos: [
        {
          id_producto: 1,
          id_servicio: 1,
          id_accion: 1
        }
      ]
    }
    let url = `${WEB_SERVICE}api/servicios/updateServicio`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
        return result;
      }));
    }

  deleteServicio(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: "",
      id_servicio: 1
    };

    let url = `${WEB_SERVICE}api/servicios/deleteServicio`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
