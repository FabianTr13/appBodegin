import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isApp } from '../../Config/configuration';
import { Storage } from '@ionic/storage';
import { ServiciosService } from '../../Services/servicios.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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
              public loadingController: LoadingController,
              private router: Router,
              public toastController: ToastController) { }

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

 async insertServicio() {
   const alert = await this.alertController.create({
     header: 'Nuevo servicio',
     inputs: [
       {
         name: 'input',
         type: 'text',
         value: null,
         placeholder: 'Nombre'
       },
       {
         name: 'costo',
         type: 'tel',
         value: 0,
         placeholder: 'Costo'
       }
     ],
     buttons: [
       {
         text: 'Cancelar',
         cssClass: 'secondary'
       }, {
         text: 'Cambiar',
         handler: async data=> {
           if (data.input != null && data.input.trim().length) {
             if(this.IsNumeric(data.costo)){
              let id_servicio = await this.Pro_servicios.insertServicio(data.input, data.costo).catch(err=>{})
              this.servicios = this.servicios_backup = await this.Pro_servicios.serviciosListAsync()
              this.editarServicio(id_servicio)
            }
            else{
              await this.showToast('Ingrese un precio valido', 3000);
            }
           }
           else{
             await this.showToast('Nombre vacio');
           }
         }
       }
     ]
   });
   await alert.present();
 }

  IsNumeric(input){
    return (input - 0) == input && (''+input).trim().length > 0;
  }

 async showToast(p_mensaje, p_duration=3000){
   const toast = await this.toastController.create({
     message: p_mensaje,
     duration: p_duration,
     position: 'middle',
     showCloseButton: true,
     closeButtonText: 'Cerrar'
   });
   toast.present();
 }

 editarServicio(p_id_servicio){
  this.router.navigate(['/servicio-config', p_id_servicio])
 }

 nuevoServicio(){
   this.router.navigate(['/servicio-config', 0])
 }
}
