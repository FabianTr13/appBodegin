import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


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
              private router:Router) { }

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
         if(variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())){
           this.productos.push(variable)
         }
     });
   }

   async doRefresh(event) {
     this.productos = this.productos_backup = await this.Pro_productos.inventarioListAsync()
     event.target.complete();
   }

   async productoDetalle(p_id_producto){
     this.router.navigate(['/producto-detalle/', p_id_producto])
   }
}
