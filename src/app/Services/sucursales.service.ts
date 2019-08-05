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


    async InserUpdateDeleteSucursal(p_id_sucursal, p_descripcion, p_smallName, p_accion){
      const headers = new HttpHeaders(Header);
      //Preparacion de body
      let body = {
        token: await this.storage.get('token'),
        id_sucursal: p_id_sucursal,
        nombre: p_descripcion,
        nombre_corto:p_smallName,
        accion: p_accion
      };
      let url = `${WEB_SERVICE}api/sucursales/insertUpdateDeleteSucursales`

      return await this.Pro_http.post(url, body, { headers }).toPromise();
    }
}
