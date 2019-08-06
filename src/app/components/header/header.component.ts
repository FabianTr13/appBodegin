import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SucursalesService } from '../../Services/sucursales.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public alertController: AlertController,
              private Pro_sucursales:SucursalesService,
              private storage:Storage) {}

  sucursal = {
    id_sucursal : null,
    descripcion : null
  }

  @Input() titulo: String = "";

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_sucursales.obtenerSucursalSeleccionda(token).subscribe(data=>{
        this.sucursal = data;
      })
    })
  }


  async presentAlertRadio() {
    let sucursales = []

    let sucursales_list = await this.Pro_sucursales.sucursalesListUsuario();
    if (Array.isArray(sucursales_list)) {
      for (let i = 0; i < sucursales_list.length; i++) {
        sucursales.push({
          type:'radio',
          label: sucursales_list[i].descripcion,
          value: sucursales_list[i].id_sucursal
        })
      }
    }

    let alert = await this.alertController.create({
      header: 'Sucursales',
      inputs: sucursales,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Cambiar',
          handler: async data=> {
            if (Array.isArray(sucursales_list)) {
              this.sucursal =  sucursales_list.filter(item=> item.id_sucursal == data)[0]
              this.storage.set('sucursal', this.sucursal);
              await this.Pro_sucursales.updateSucursalSeleccionda(this.sucursal.id_sucursal).catch(err=>{
                this.sucursal = {id_sucursal:null, descripcion:null}
              })
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
