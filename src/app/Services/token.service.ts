import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage,
              private router:Router) { }

  validaToken(): Promise<boolean>{
    return new Promise(async (resolve, reject)=>{
      let token = await this.storage.get('token')

      //Preparacion de header
      const headers = new HttpHeaders(Header);

      //Preparacion de body
      let body = {
        token:  token
      }
      let url = `${WEB_SERVICE}api/usuarios/validaToken`

      this.Pro_http.post(url, body, { headers }).subscribe((data:boolean) => {
        if (data==false) {
            this.router.navigate(['login'])
        }
        resolve(data)
      }, err=>{
        this.router.navigate(['login'])
        resolve(false)
      })
    })
  }

  async token(){
      return await this.storage.get('token')
  }
}
