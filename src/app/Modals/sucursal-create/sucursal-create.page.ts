import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SucursalesService } from '../../Services/sucursales.service';
import { UserService } from '../../Services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.page.html',
  styleUrls: ['./sucursal-create.page.scss'],
})
export class SucursalCreatePage implements OnInit {

  @Input() sucursal = {
    id_sucursal:null,
    descripcion:null,
    nombre_corto:null
  };
  @Input() accion;
  usuarios = [
    {
      id_usuario:null,
      id_perfil:null,
      usuario:null,
      celular:null,
      fecha_creado:null,
      activo:null,
      nombre:null,
      seleccionado:null
    }
  ];

  constructor(private Pro_sucursales: SucursalesService,
              public modalController: ModalController,
              public toastController: ToastController,
              private Pro_usuarios:UserService,
              private storage: Storage) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_usuarios.getUsuariosList(token, this.sucursal.id_sucursal).subscribe(data=>{
        this.usuarios = data;
        console.log(data)
      })
    })
  }

  async InsertUpdateSucursal(){
    this.Pro_sucursales.InserUpdateDeleteSucursal(this.sucursal.id_sucursal,
      this.sucursal.descripcion,
      this.sucursal.nombre_corto,
      this.accion
    )
    console.log(this.usuarios)
    await this.Pro_sucursales.insertSucursalUsuario(this.usuarios, this.sucursal.id_sucursal)
    this.modalController.dismiss(this.sucursal);
  }

  async Salir(){
    this.modalController.dismiss();
  }
}
