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

  getChart(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/inventarios/getChart`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  reporteStock(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/inventarios/reporteStock`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  reportePedido(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/inventarios/reportePedido`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async getChartAsync(p_id_sucursal){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_sucursal: p_id_sucursal
    }

    let url = `${WEB_SERVICE}api/inventarios/getChart`
    return this.Pro_http.post(url, body, { headers }).toPromise()
  }
}
