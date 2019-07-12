import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/client.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private Pro_cliente:ClientService,
  public toastController: ToastController,
private Pro_router:Router,
private Pro_user:UserService,
private storage: Storage,
public loadingController: LoadingController) { }

  ngOnInit() {
  }

  logo = "assets/img/splash.png"

  registrarUsuario(p_form){
    console.log('llege al controllador',p_form.form.value)
    this.Pro_cliente.validarNuevoCliente(p_form.form.value).subscribe(async resp=>{
      if (resp!=null) {
        if (resp==0) {
          this.Pro_cliente.registraUsuario(p_form.form.value).subscribe(async data => {
            this.Pro_user.login(p_form.form.value.user, p_form.form.value.password).subscribe(async respAuth=>{
              if (respAuth!=null) {
                if (respAuth.token) {
                  await this.storage.set('token',respAuth.token)
                  await this.Pro_router.navigate(['/home'])
                  await this.showToast('Bienvenido')
                }
              }
            });
          }, err=>{

          })
        }else if (resp==1) {
            await this.showToast('Empresa ya registrada')
        }else if (resp==2) {
          await this.showToast('Usuario ya registrado')
        }
      }
    });
  }

  async showToast(p_mensaje){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: 2000
    });
    toast.present();
  }
}
