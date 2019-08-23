import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NuevoProductoPage } from '../../Modals/nuevo-producto/nuevo-producto.page';
import { SucursalesService } from '../../Services/sucursales.service';
import { Storage } from '@ionic/storage';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  sucursal;
  usuario;

  constructor(private Pro_router:Router,
              private modalController:ModalController,
              private Pro_sucursal:SucursalesService,
              private storage:Storage,
              private Pro_usuario:UserService) { }

  ngOnInit() {
    this.refresher()
  }

  public refresher(){
    this.storage.get('token').then(token=>{
      this.Pro_sucursal.obtenerSucursalSeleccionda(token).subscribe(suc=>{
        this.sucursal = suc
        // console.log(suc)
      })
      this.Pro_usuario.getUsuarioSide(token).subscribe(user=>{
        this.usuario = user
        console.log(user)
      })
    })
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
