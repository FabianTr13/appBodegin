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
      costo: p_trans.costo,
      fecha: p_trans.fecha,
      id_tipo_transaccion: p_trans.id_tipo_transaccion,
      id_sucursal: p_trans.id_sucursal
    }
    let url = `${WEB_SERVICE}api/inventarios/insertTransaccion`
    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }
}