import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isApp } from '../../Config/configuration';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { SucursalesService } from '../../Services/sucursales.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SucursalCreatePage } from '../../Modals/sucursal-create/sucursal-create.page';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {

  sucursales;
  sucursales_backup;
  textSearch = ''
  @ViewChild('list') el:ElementRef;

  constructor(private Pro_sucursales:SucursalesService,
              private storage:Storage,
              public modalController: ModalController,
              public alertController: AlertController,
              public loadingController: LoadingController,
              public toastController: ToastController
            ) { }

  ngOnInit() {
    this.storage.get('token').then(token =>{
      this.Pro_sucursales.obtenerSucursales(token).subscribe(data=>{
        this.sucursales = this.sucursales_backup = data;
      })
    })
  }

  async presentModal(p_accion, p_sucursal=undefined) {

    let suc = {
      id_sucursal:p_sucursal ? p_sucursal.id_sucursal : null,
      descripcion: p_sucursal ? p_sucursal.descripcion : null,
      nombre_corto: p_sucursal ? p_sucursal.nombre_corto : null,
      direccion: p_sucursal ? p_sucursal.direccion : null,
      telefono: p_sucursal ? p_sucursal.telefono : null
    }

    const modal = await this.modalController.create({
      component: SucursalCreatePage,
      componentProps: {
        'sucursal': suc,
        'accion':p_accion
      }
    });
    await modal.present();
    let data  = await modal.onDidDismiss()

    if (data.data != undefined) {
      this.refreshUpdate();
    }
  }

  async SucursalDelete(p_id_sucursal, p_descripcion) {
    const alert = await this.alertController.create({
      header: 'Eliminar Sucursal',
      message: `Eliminar ${p_descripcion}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Eliminar',
          handler: async data => {
            await this.Pro_sucursales.InserUpdateDeleteSucursal(p_id_sucursal, data,'','','', 'DELETE');
            await this.refreshUpdate();
          }
        }
      ]
    });
    await alert.present();
  }

  async refreshUpdate(){
    console.log('caimos al refresh')
    this.sucursales = this.sucursales_backup = await this.Pro_sucursales.obtenerSucursalesAsync()
    let event = new MouseEvent('click', {bubbles: false});
    await this.el.nativeElement.dispatchEvent(event);
    this.textSearch = null
  }

  async doRefresh(event) {
    await this.refreshUpdate()
    event.target.complete();
  }

 async busqueda(p_busqueda){
   this.sucursales = []
   this.sucursales_backup.forEach(variable => {
       if(variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())){
         this.sucursales.push(variable)
       }
   });
 }
}
