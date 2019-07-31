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

  insertServicio(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: "",
      nombre: "",
      productos:[
        {
          id_producto: 1,
          cantidad : 1,
          tipo_consumo: 1
        }
      ]
    };

    let url = `${WEB_SERVICE}api/servicios/serviciosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
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
