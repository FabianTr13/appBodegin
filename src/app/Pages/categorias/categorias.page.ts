import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  categorias_backup;
  textSearch = ''

  @ViewChild('list') el:ElementRef;

  ngOnInit() {
    this.storage.get('token').then(token =>{
      this.Pro_categorias.obtenerCategorias(token).subscribe(data=>{
        this.categorias = this.categorias_backup = data;
      })
    })
  }

  async categoriaInsertUpdate(p_id_categoria, p_accion, p_value = null) {
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
          handler: async data=> {
            await this.Pro_categorias.InsertUpdateDeleteCategoria(p_id_categoria, data.input, p_accion).catch(err=>{});
            await this.refreshUpdate();
          }
        }
      ]
    });
    await alert.present();
  }

  async categoriaDelete(p_id_categoria, p_descripcion) {
    const alert = await this.alertController.create({
      header: 'Eliminar Categoria',
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
            await this.Pro_categorias.InsertUpdateDeleteCategoria(p_id_categoria, data, 'DELETE');
            await this.refreshUpdate();
          }
        }
      ]
    });
    await alert.present();
  }

  async refreshUpdate(){
    this.categorias = this.categorias_backup = await this.Pro_categorias.obtenerCategoriasAsync()
    let event = new MouseEvent('click', {bubbles: false});
    await this.el.nativeElement.dispatchEvent(event);
    this.textSearch = 'HOLA'
    console.log(this.textSearch)
  }

  async doRefresh(event) {
    await this.refreshUpdate()
    event.target.complete();
 }

 async busqueda(p_busqueda){
   this.categorias = []
   this.categorias_backup.forEach(variable => {
       if(variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())){
         this.categorias.push(variable)
       }
   });
 }
}
