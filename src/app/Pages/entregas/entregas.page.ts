import { Component, OnInit } from '@angular/core';
import { EntregasService } from '../../Services/entregas.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {

  servicios = []

  constructor(private Pro_entregas:EntregasService,
              private storage:Storage) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_entregas.getSetvicios(token).subscribe(data=>{
        this.servicios = data
      })
    })
  }

  async doRefresh(event) {
    this.storage.get('token').then(token=>{
      this.Pro_entregas.getSetvicios(token).subscribe(data=>{
        this.servicios = data
        event.target.complete();
      }, err=>{
        event.target.complete();
      })
    })
  }

  async entregarServicio(p_id_servicio){
    await this.Pro_entregas.realizarEntrega(p_id_servicio);
  }
}
