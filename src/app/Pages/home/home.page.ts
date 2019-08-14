import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Output() onHeader:EventEmitter<number> = new EventEmitter<number>();

  constructor(private Pro_router:Router,
              private modalController:ModalController) { }

  sucursal="NINGUNA"

  ngOnInit() {
  }

  headerSiii(){
    console.log('eeeeeee')
    this.onHeader.emit(1);
  }

  navegar(pRuta){
    this.Pro_router.navigate([pRuta])
  }

  async crearProducto() {
    const modal = await this.modalController.create({
      component: NuevoProductoPage,
      componentProps: {}
    });
    await modal.present();
    let data  = await modal.onDidDismiss()

    if (data.data != undefined) {
       this.navegar('inventarios')
    }
  }
}
