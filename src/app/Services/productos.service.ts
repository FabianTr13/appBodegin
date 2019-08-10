import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/configuration';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private Pro_http:HttpClient,
              private storage: Storage,
              private fileTransfer :FileTransfer) { }

  async nuevoProducto(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      nombre: p_form.nombre,
      descripcion: p_form.descripcion,
      codigobarra: p_form.codigo,
      id_categoria: p_form.id_categoria,
      fotografia: 'p_form.foto[0]',
      id_tipo_consumo: p_form.id_tipo_consumo
    }

    let url = `${WEB_SERVICE}api/productos/nuevoProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async updateProducto(p_form){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_producto: p_form.id_producto,
      nombre: p_form.nombre,
      descripcion: p_form.descripcion,
      codigobarra: p_form.codigo,
      id_categoria: p_form.id_categoria,
      fotografia: null,
      id_tipo_consumo: p_form.id_tipo_consumo
    }

    let url = `${WEB_SERVICE}api/productos/updateProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  listaProductos(p_token, p_idServicio){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      id_servicio:p_idServicio,
      token: p_token
    };
    let url = `${WEB_SERVICE}api/productos/productosList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  inventarioList(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/productos/inventarioList`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  async inventarioListAsync(){
    //Preparacion de header
    const headers = new HttpHeaders(Header);

    //Preparacion de body
    let body = {
      token: await this.storage.get('token')
    };
    let url = `${WEB_SERVICE}api/productos/inventarioList`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async deleteProducto(p_id_producto){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: await this.storage.get('token'),
      id_producto : p_id_producto
    };
    let url = `${WEB_SERVICE}api/productos/deleteProducto`

    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  async inventarioTransacciones(p_id_producto, p_sucursal){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_producto : p_id_producto,
      id_sucursal : p_sucursal.id_sucursal
    };
    let url = `${WEB_SERVICE}api/productos/inventarioTransacciones`
    return await this.Pro_http.post(url, body, { headers }).toPromise()
  }

  getTiposConsumo(p_token){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      token: p_token
    };
    let url = `${WEB_SERVICE}api/productos/tiposConsumo`
    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getProducto(p_id_producto){
    //Preparacion de header
    const headers = new HttpHeaders(Header);
    //Preparacion de body
    let body = {
      id_producto: p_id_producto
    };
    let url = `${WEB_SERVICE}api/productos/getProducto`

    return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  subirImagen( img: string, p_id_producto ) {

    const headers = new HttpHeaders(Header);
    if (img != null || !img.includes('www.bodegin.com')) {
      if (!isApp) {
        let formData = new FormData();
        formData.append('image', img, 'image');
        formData.append('id_producto', String(p_id_producto));

        let url = `${WEB_SERVICE}api/productos/upload`

        this.Pro_http.post(url, formData).subscribe((val) => {
          console.log(val);
        });
      }
      else
      {
        const options: FileUploadOptions = {
            fileKey: 'image',
            headers: headers,
            params:{
                id_producto:p_id_producto
              }
            };
            const fileTransfer: FileTransferObject = this.fileTransfer.create();

            let url = `${WEB_SERVICE}api/productos/upload`

            fileTransfer.upload( img, url, options ).then( data => {
                  console.log('leoeoeooe');
                  console.log(data);
                }).catch( err => {
                    console.log('leoeoeooe');
            });
      }
    }
  }
}
