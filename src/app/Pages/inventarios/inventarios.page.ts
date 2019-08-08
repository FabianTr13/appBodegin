import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';
import { ModalController } from '@ionic/angular';
import { ProductoDetallePage } from '../../Modals/producto-detalle/producto-detalle.page';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.page.html',
  styleUrls: ['./inventarios.page.scss'],
})
export class InventariosPage implements OnInit {

  productos;
  productos_backup;
  textSearch = ''
  
  constructor(private Pro_productos:ProductosService,
              private storage:Storage,
              private router:Router,
              private modalController:ModalController) {}

  ngOnInit() {
    this.storage.get('token').then(token =>{
    this.Pro_productos.inventarioList(token).subscribe(data=>{
      this.productos = this.productos_backup = data;
    })
  })
  }

  async busqueda(p_busqueda){
     this.productos = []
     this.productos_backup.forEach(variable => {
         if(variable.nombre.toLowerCase().includes(p_busqueda.toLowerCase())){
           this.productos.push(variable)
         }
     });
   }

   async doRefresh(event) {
     this.productos = this.productos_backup = await this.Pro_productos.inventarioListAsync()
     event.target.complete();
   }

   async productoDetalle(p_id_producto){
     const modal = await this.modalController.create({
       component: ProductoDetallePage,
       componentProps: {
         id_producto:p_id_producto
       }
     });
     await modal.present();
     let data  = await modal.onDidDismiss()
 
     if (data.data != undefined) {
        this.productos = this.productos_backup = await this.Pro_productos.inventarioListAsync()
     }
   }
   
   async crearProducto() {
     const modal = await this.modalController.create({
       component: NuevoProductoPage,
       componentProps: {}
     });
     await modal.present();
     let data  = await modal.onDidDismiss()
 
     if (data.data != undefined) {
        this.productos = this.productos_backup = await this.Pro_productos.inventarioListAsync()
     }
   }
}
