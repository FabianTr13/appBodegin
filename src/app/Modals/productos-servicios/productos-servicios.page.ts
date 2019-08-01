import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Storage } from '@ionic/storage';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-productos-servicios',
  templateUrl: './productos-servicios.page.html',
  styleUrls: ['./productos-servicios.page.scss'],
})
export class ProductosServiciosPage implements OnInit {

  productos = []
  @Input() id_servicio: string;

  constructor(private Pro_productos:ProductosService,
              private storage:Storage) { }

  ngOnInit() {
      this.Pro_productos.listaProductos(this.id_servicio).subscribe(data=>{
        this.productos = data;
        console.log(this.productos)
      })
  }
}
