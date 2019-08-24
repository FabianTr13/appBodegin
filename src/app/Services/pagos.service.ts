import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private Pro_http:HttpClient,
              private storage:Storage) { }

  async insertPago(p_response, p_monto){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id: p_response.id,
      monto: p_monto,
      response: p_response
    };
    let url = `${WEB_SERVICE}api/pagos/insertPago`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }
}
