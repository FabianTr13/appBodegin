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
        console.log(this.servicios)
      })
    })
  }
}
