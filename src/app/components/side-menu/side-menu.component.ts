import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private Pro_router:Router,
              private modalController:ModalController) { }

  ngOnInit() {}

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
