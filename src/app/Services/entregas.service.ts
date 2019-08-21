import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  constructor(private Pro_http:HttpClient,
              private storage:Storage) { }

  getSetvicios(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/entregas/getServicios`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
