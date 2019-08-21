import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProductosListPage } from '../../Modals/productos-list/productos-list.page';
import { ToastController } from '@ionic/angular';
import { InventariosService } from '../../Services/inventarios.service';
import { Storage } from '@ionic/storage';
import { SucursalesService } from '../../Services/sucursales.service';


@Component({
  selector: 'app-inventario-transacciones',
  templateUrl: './inventario-transacciones.page.html',
  styleUrls: ['./inventario-transacciones.page.scss'],
})
export class InventarioTransaccionesPage implements OnInit {

  sucursales = []

  producto ={
    id_producto: null,
    nombre: "Seleccione un producto",
    imagen: 'assets/img/splash.png',
    codigo: null
  }

  cantidad:number=1;
  today = new Date().toISOString().slice(0, 10)
  fecha = new Date().toISOString().slice(0, 10)
  id_tipo_transaccion: 1
  costo=null
  id_sucursal=null

  constructor(public alertController: AlertController,
              private modalController:ModalController,
              private toastController:ToastController,
              private Pro_inventarios:InventariosService,
              private storage:Storage,
              private Pro_sucursales:SucursalesService) {
  }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_sucursales.obtenerSucursales(token).subscribe(data=>{
        this.sucursales = data
      })
    })
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

  async showToast(p_mensaje, p_duration=2000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  salidaEntrada(p_valor){
    this.id_tipo_transaccion = p_valor
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

  async guardar(){
    if (this.validador()) {
      let transaccion = {
        id_producto: this.producto.id_producto,
        cantidad: this.cantidad,
        costo: this.costo,
        fecha: this.fecha,
        id_tipo_transaccion: this.id_tipo_transaccion,
        id_sucursal: this.id_sucursal
      }
      await this.Pro_inventarios.insertTransaccion(transaccion).catch(err=>{})
    }
  }

  async validador(){
    if (this.producto.id_producto == null) {
      await this.showToast('Seleccione un producto')
      return false;
    }
    else if (this.cantidad <= 0  || this.cantidad.toString().trim()=='') {
      await this.showToast('Ingrese un cantidad')
      return false;
    }
    else if (this.fecha.trim()=='') {
      await this.showToast('Ingrese un fecha')
      return false;
    }
    else{
      return true;
    }
  }

  validateNumber(evt, valida_punto = false) {
    var e = evt || window.event;
    var key = e.keyCode || e.which;

    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tab and Enter
    key == 8 || key == 9 || key == 13 ||
    // Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45 || (valida_punto && key == 190)) {
    }
    else {
      e.returnValue = false;
      if (e.preventDefault) e.preventDefault();
    }
  }
}
