import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProductosService } from '../../Services/productos.service';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.page.html',
  styleUrls: ['./productos-list.page.scss'],
})
export class ProductosListPage implements OnInit {

  productos;
  productos_backup;
  textSearch = ''

  constructor(private modalController:ModalController,
              private storage:Storage,
              private Pro_productos:ProductosService) { }

  ngOnInit() {
    this.storage.get('token').then(token =>{
    this.Pro_productos.inventarioList(token).subscribe(data=>{
      this.productos = this.productos_backup = data;
      console.log(this.productos)
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

 productoDetalle(p_item){
   this.modalController.dismiss({producto:p_item});
 }
}
