import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProductosListPage } from '../../Modals/productos-list/productos-list.page';

@Component({
  selector: 'app-inventario-transacciones',
  templateUrl: './inventario-transacciones.page.html',
  styleUrls: ['./inventario-transacciones.page.scss'],
})
export class InventarioTransaccionesPage implements OnInit {

  producto ={
    id_producto: 1,
    nombre: "Seleccione un producto",
    imagen: 'assets/img/splash.png',
    codigo: "01-04-07-0000"
  }

  cantidad:number=1;
  today = new Date().toISOString().slice(0, 10)
  fecha = new Date().toISOString().slice(0, 10)
  tipoTransaccion: 1
  costo=null

  constructor(public alertController: AlertController,
              private modalController:ModalController) {
  }

  ngOnInit() {
  }

  sumaRestar(p_valor){
    if (p_valor == '1') {
      this.cantidad++
    }
    else{
      this.cantidad--
      if (this.cantidad == 0) {
          this.cantidad = 1
      }
    }
  }

  salidaEntrada(p_valor){
    this.tipoTransaccion = p_valor
  }

  async seleccionarProducto(){
    const modal = await this.modalController.create({
      component: ProductosListPage,
      componentProps: {

      }
    });
    await modal.present();
    let data  = await modal.onDidDismiss()

    if (data.data != undefined) {
      this.producto = data.data.producto
    }
  }
}
