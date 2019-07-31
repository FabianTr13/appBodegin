import { Component, OnInit } from '@angular/core';
import { isApp } from '../../Config/configuration';
import { Storage } from '@ionic/storage';
import { CategoriasService } from '../../Services/categorias.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private Pro_categorias:CategoriasService,
              private storage:Storage,
              public alertController: AlertController,
              public loadingController: LoadingController) { }

  categorias;

  ngOnInit() {
    this.storage.get('token').then(token =>{
      this.Pro_categorias.obtenerCategorias(token).subscribe(data=>{
        this.categorias = data;
        console.log(data)
      }, err=>{
      })
    })
  }

  async categoriaInsertUpdate(p_accion, p_value = null) {
      let header = p_accion == 'INSERT' ? 'Nueva Categoria' : 'Actualizar Categoria'
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
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
}
