import { Component, OnInit, NgZone } from '@angular/core';
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
              public loadingController: LoadingController,
              private zone: NgZone) { }

  ngOnInit() {
  }

  logo = "assets/img/splash.png"
  isLoading = false
  captchaPassed: boolean = false
  captchaResponse: string

  async registrarUsuario(p_form){
    if (p_form.form.value.password != p_form.form.value.passwordRepeat) {
        await this.showToast('las contraseñas no coinciden', 3000)
    }
    else
    {
      await this.present()
      this.Pro_cliente.validarNuevoCliente(p_form.form.value).subscribe(async resp=>{
        if (resp!=null) {
          if (resp==0) {
            this.Pro_cliente.registraUsuario(p_form.form.value).subscribe(async data => {
              this.Pro_user.login(p_form.form.value.user, p_form.form.value.password).subscribe(async respAuth=>{
                if (respAuth!=null) {
                  if (respAuth.token) {
                    await this.storage.set('token',respAuth.token)
                    await this.dismiss()
                    await this.login(p_form.form.value.user, p_form.form.value.password)
                    await this.showToast('Bienvenido')
                  }
                }
              });
            }, async err=>{
              await this.dismiss()
            })
          }else if (resp==1) {
              await this.showToast('Empresa ya registrada')
              await this.dismiss()
          }else if (resp==2) {
            await this.showToast('Usuario ya registrado')
            await this.dismiss()
          }
        }
        else{
          await this.dismiss()
        }
      }, async err =>{
        await this.dismiss()
      });
    }
  }

  async showToast(p_mensaje, p_duration=2000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration
    });
    toast.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {});
  }

  async login(p_usuario, p_password){
    await this.present()
    this.Pro_user.login(p_usuario, p_password).subscribe(async resp=>{
      if (resp!=null) {
        if (resp.token) {
          await this.storage.set('token',resp.token)
          await this.dismiss()
          this.Pro_router.navigate(['/home'])
        }
      }
    }, async err=>{
      await this.dismiss()
    });
  }

  captchaResolved(response: string): void {
        this.zone.run(() => {
            this.captchaPassed = true;
            this.captchaResponse = response;
        });
  }

  formValid(){

  }
}
