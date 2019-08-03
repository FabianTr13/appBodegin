import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Storage } from '@ionic/storage';
import { NavParams } from '@ionic/angular';
import { ServiciosService } from '../../Services/servicios.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productos-servicios',
  templateUrl: './productos-servicios.page.html',
  styleUrls: ['./productos-servicios.page.scss'],
})
export class ProductosServiciosPage implements OnInit {

  productos = []
  productos_backup = []
  textSearch = null
  @Input() id_servicio: string;

  constructor(private Pro_productos:ProductosService,
              private storage:Storage,
              private Pro_service: ServiciosService,
              public modalController: ModalController,
              public toastController: ToastController) { }

  ngOnInit() {
      this.storage.get('token').then(token=>{
        this.Pro_productos.listaProductos(token, this.id_servicio).subscribe(data=>{
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

  async validador(){
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].cantidad <= 0 && this.productos[i].is_check) {
          await this.showToast('Producto con cantidad invalida')
          return false
      }
    }
    return true
  }

  async showToast(p_mensaje, p_duration=3000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'middle',
      showCloseButton:true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  async guardarProductos(){
    if (await this.validador()) {
      let productos_save = await this.Pro_service.updateProductos(this.id_servicio, this.productos)
      this.modalController.dismiss({productos:productos_save});
    }
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
