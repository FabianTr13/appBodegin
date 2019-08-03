import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isApp } from '../../Config/configuration';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { SucursalesService } from '../../Services/sucursales.service';

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
              public alertController: AlertController,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.storage.get('token').then(token =>{
      this.Pro_sucursales.obtenerSucursales(token).subscribe(data=>{
        this.sucursales = this.sucursales_backup = data;
      })
    })
  }


  async sucursalInsertUpdate(p_id_sucursal, p_accion, p_value = null) {
    let header = p_accion == 'INSERT' ? 'Nueva Sucursal' : 'Actualizar Sucursal'
    let boton = p_accion == 'INSERT' ? 'Crear' : 'Actualizar'

    const alert = await this.alertController.create({
      header: header,
      inputs: [
        {
          name: 'input',
          type: 'text',
          value: p_value,
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        }, {
          text: boton,
          handler: async data=> {
            await this.Pro_sucursales.InserUpdateDeleteSucursal(p_id_sucursal, data.input, p_accion).catch(err=>{});
            await this.refreshUpdate();
          }
        }
      ]
    });
    await alert.present();
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
              await this.Pro_sucursales.InserUpdateDeleteSucursal(p_id_sucursal, data, 'DELETE');
              await this.refreshUpdate();
            }
          }
        ]
      });
      await alert.present();
    }

    async refreshUpdate(){
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
