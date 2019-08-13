import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private Pro_http:HttpClient,
              private fileTransfer :FileTransfer,
              private storage:Storage) { }

  validarNuevoCliente(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      nombre_legal:p_form.nombreLegal,
      rtn:p_form.rtn,
      celular: p_form.phone,
      usuario: p_form.user
    }
    let url = `${WEB_SERVICE}api/clientes/validanuevocliente`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  validaUsuario(p_id_cliente, p_usuario){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      id_cliente: p_id_cliente,
      usuario: p_usuario
    }
    let url = `${WEB_SERVICE}api/clientes/validaUsuario`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  registraUsuario(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      nombre_comercial: p_form.nombreComercial,
      nombre_legal:p_form.nombreLegal,
      logo:p_form.logo,
      rtn:p_form.rtn,
      direccion:p_form.direccion,
      celular:p_form.phone,
      usuario:p_form.user,
      clave:p_form.password
    }
    let url = `${WEB_SERVICE}api/clientes/CrearCliente`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  recuperarCliente(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    }
    let url = `${WEB_SERVICE}api/clientes/getCliente`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  updateCliente(p_cliente){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      id_cliente: p_cliente.id_cliente,
      nombre_legal: p_cliente.nombre_legal,
      nombre_comercial: p_cliente.nombre_comercial,
      rtn: p_cliente.rtn,
      telefono: p_cliente.telefono,
      direccion: p_cliente.direccion,
      usuario: p_cliente.usuario
    }

    let url = `${WEB_SERVICE}api/clientes/updateCliente`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  subirImagen( img: string, p_id_cliente ) {
    return new Promise(async (reject, resolve)=>{
      const headers = new HttpHeaders(Header);

      let tipado = true
      if (typeof(img)=='string') {
          if (img.includes('www.bodegin.com')) {
              tipado = false
          }
      }

      if (img != null && img!=undefined && tipado) {
        if (!isApp) {
          let formData = new FormData();
          formData.append('image', img, 'image');
          formData.append('id_cliente', String(p_id_cliente));

          let url = `${WEB_SERVICE}api/clientes/uploadImagenClientes`

          this.Pro_http.post(url, formData).subscribe((val) => {
            resolve(true)
          }, err=>{
            resolve(true)
          });
        }
        else
        {
          const options: FileUploadOptions = {
              fileKey: 'image',
              headers: headers,
              params:{
                  id_cliente:p_id_cliente
                }
              };
              const fileTransfer: FileTransferObject = this.fileTransfer.create();

              let url = `${WEB_SERVICE}api/clientes/uploadImage`

              await fileTransfer.upload( img, url, options ).then( data => {
                  resolve(true)
                  }).catch( err => {
                  resolve(true)
              });
        }
      }
      else{
        resolve(true)
      }
    })
  }
}
