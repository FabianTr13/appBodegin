import { UserService } from '../../Services/user.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  constructor(private Pro_user:UserService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              private Pro_router:Router,
              private storage: Storage,
              private zone: NgZone) { }

  ngOnInit() {
  }
  celularConfirmado = false
  codigoConfirmado = false
  textBoton = "Siguiente"
  codigoEnviado = null
  id_usuario: null
  isLoading = false
  usuario = null
  logo = "assets/img/splash.png"
  captchaPassed: boolean = false
  captchaResponse: string


  async botonAvance(p_valor){
    await this.present()
    if (!this.celularConfirmado) {
      this.Pro_user.confirmarCelular(p_valor.form.value.celular).subscribe(async resp=>{
        if (resp!=null) {
            if (resp.codigo != null) {
              this.codigoEnviado = resp.codigo
              this.id_usuario = resp.id_usuario
              this.celularConfirmado = true
              this.usuario = resp.usuario
              this.textBoton = "Confirmar Codigo"
              console.log(this.codigoEnviado)
              await this.dismiss()
              await this.showToast('Te enviamos un mensaje de confirmacion', 4000)
            }
        }else{
          await this.showToast('Celular no registrado', 5000)
          await this.dismiss()
        }
      }, async err=>{
        await this.dismiss()
      })
    }else if (this.celularConfirmado && !this.codigoConfirmado) {
        if (p_valor.form.value.codigo == this.codigoEnviado) {
          this.codigoConfirmado = true
          this.textBoton = "Cambiar Contraseña"
          await this.dismiss()
        }else{
          await this.dismiss()
          await this.showToast('Verifica tu numero de celular', 4000)
          this.celularConfirmado = false
          this.textBoton = 'Siguiente'
        }
    }else if (this.celularConfirmado && this.codigoConfirmado) {
      if (p_valor.form.value.nuevaPassC != null && p_valor.form.value.nuevaPass != null) {
        if (p_valor.form.value.nuevaPassC == p_valor.form.value.nuevaPass) {
          this.Pro_user.cambiarPassword(this.id_usuario, p_valor.form.value.nuevaPass).subscribe(async resp =>{
            await this.login(p_valor.form.value.nuevaPass)
            await this.dismiss()
          }, async err=>{
            await this.dismiss()
          })
        }else{
          await this.showToast('Tus contraeñas no coinciden', 5000)
          await this.dismiss()
        }
      }
    }
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
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

  async showToast(p_mensaje, p_duration=2000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration
    });
    toast.present();
  }

  async login(p_password){
    await this.present()
    let id_onesignal = await this.storage.get('id_onesignal')
    this.Pro_user.login(this.usuario, p_password, id_onesignal).subscribe(async resp=>{
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
}
