import { Component, OnInit, Output, EventEmitter, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private Pro_router:Router,
              private modalController:ModalController) { }

  sucursal="NINGUNA"

  ngOnInit() {
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
