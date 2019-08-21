import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class InventariosService {

  constructor(private Pro_http:HttpClient,
              private storage:Storage) { }

  async insertTransaccion(p_trans){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_producto: p_trans.id_producto,
      cantidad: p_trans.cantidad,
      id_tipo_transaccion: 1,
      id_sucursal: p_trans.id_sucursal,
      fecha: p_trans.fecha
    }
    let url = `${WEB_SERVICE}api/inventarios/insertTransaccion`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
