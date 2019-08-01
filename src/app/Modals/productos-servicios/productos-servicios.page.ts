import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Storage } from '@ionic/storage';
import { NavParams } from '@ionic/angular';
import { ServiciosService } from '../../Services/servicios.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-productos-servicios',
  templateUrl: './productos-servicios.page.html',
  styleUrls: ['./productos-servicios.page.scss'],
})
export class ProductosServiciosPage implements OnInit {

  productos = []
  productos_backup = []
  @Input() id_servicio: string;

  constructor(private Pro_productos:ProductosService,
              private storage:Storage,
              private Pro_service: ServiciosService,
              public modalController: ModalController) { }

  ngOnInit() {
      this.Pro_productos.listaProductos(this.id_servicio).subscribe(data=>{
        this.productos = this.productos_backup = data;
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

  async guardarProductos(){
     let productos_save = await this.Pro_service.updateProductos(this.id_servicio, this.productos)
     this.modalController.dismiss({productos:productos_save});
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
