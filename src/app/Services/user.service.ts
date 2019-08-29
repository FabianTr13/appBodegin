import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Pro_http:HttpClient,
              private storage:Storage,
              private router:Router) { }

  login(p_usuario, p_password, p_id_oneSignal){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      usuario:p_usuario,
      password:p_password,
      id_onesignal: p_id_oneSignal
    }
    let url = `${WEB_SERVICE}api/usuarios/login`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  confirmarCelular(p_numero){
    const headers = new HttpHeaders(Header);
    let body = {
      celular:p_numero
    }

    let url = `${WEB_SERVICE}api/usuarios/validaCelular`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  validaUsuario(p_usuario, p_id_usuario){
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:p_id_usuario,
      usuario:p_usuario
    }

    let url = `${WEB_SERVICE}api/usuarios/validaUsuario`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async eliminarUsuario(p_id_usuario){
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:p_id_usuario
    }

    let url = `${WEB_SERVICE}api/usuarios/deleteUser`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  cambiarPassword(p_id_usuario, p_password){
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:p_id_usuario,
      password:p_password
    }

    let url = `${WEB_SERVICE}api/usuarios/cambiarPassword`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getUsuariosList(p_token, p_id_sucursal){
    const headers = new HttpHeaders(Header);
    let body = {
      token: p_token,
      id_sucursal:p_id_sucursal
    }

    let url = `${WEB_SERVICE}api/usuarios/usuariosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getUsuariosConfigList(p_token){
    const headers = new HttpHeaders(Header);
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/usuarios/usuariosConfigList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async InsertUpdateUsuario(p_usuario, p_accion){
    const headers = new HttpHeaders(Header);
    let body = {
      token: await this.storage.get('token'),
      id_usuario: p_usuario.id_usuario,
      nombre: p_usuario.nombre,
      telefono: p_usuario.telefono,
      usuario: p_usuario.usuario,
      id_perfil: p_usuario.id_perfil,
      accion: p_accion
    }

    let url = `${WEB_SERVICE}api/usuarios/crearUsuario`
    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  getUsuario(p_id_usuario){
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario: p_id_usuario
    }

    let url = `${WEB_SERVICE}api/usuarios/getUsuario`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getUsuarioSide(p_token){
    const headers = new HttpHeaders(Header);
    let body = {
      token: p_token
    }

    let url = `${WEB_SERVICE}api/usuarios/getUsuarioSide`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getUPerfiles(){
    const headers = new HttpHeaders(Header);
    let body = {}

    let url = `${WEB_SERVICE}api/usuarios/usuariosPerfiles`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }


  validaPerfil(): Promise<boolean>{
    return new Promise(async (resolve, reject)=>{
      let token = await this.storage.get('token')

      //Preparacion de header
      const headers = new HttpHeaders(Header);

      //Preparacion de body
      let body = {
        token:  token
      }
      let url = `${WEB_SERVICE}api/usuarios/validaPerfil`
      this.Pro_http.post(url, body, { headers }).subscribe((data:boolean) => {
        if (data==false) {
            this.router.navigate(['home'])
        }
        resolve(data)
      }, err=>{
        this.router.navigate(['home'])
        resolve(false)
      })
    })
  }
}
