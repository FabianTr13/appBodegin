import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isApp } from '../../Config/configuration';
import { Storage } from '@ionic/storage';
import { ServiciosService } from '../../Services/servicios.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  servicios;
  servicios_backup;
  textSearch = ''

  constructor(private Pro_servicios:ServiciosService,
              private storage:Storage,
              public alertController: AlertController,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_servicios.serviciosList(token).subscribe(data=>{
        this.servicios = this.servicios_backup = data;
      })
    })
  }

  async doRefresh(event) {
    this.servicios = this.servicios_backup = await this.Pro_servicios.serviciosListAsync()
    event.target.complete();
 }

 async busqueda(p_busqueda){
   this.servicios = []
   this.servicios_backup.forEach(variable => {
       if(variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())){
         this.servicios.push(variable)
       }
   });
 }

 editarServicio(p_id_servicio){
  console.log(p_id_servicio)
 }

 nuevoServicio(){
   console.log('nuevo')
 }
}
