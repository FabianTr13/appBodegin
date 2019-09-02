import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { isApp } from '../../Config/configuration';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Pro_user:UserService,
              private router: Router,
              private storage: Storage,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private vibration: Vibration,
              private faio: FingerprintAIO) {
                this.storage.get('usuario').then(resp=>{
                    this.usuario = resp
                    this.storage.remove('usuario').then(rr=>{})
                })
              }

  ngOnInit() {
    this.is_app = isApp
     setTimeout( async() => { await this.loginFinger() }, 2000);
  }

  isLoading = false;
  usuario = null
  is_app = null

  async login(form:NgForm, kind = 1, p_finger = null){
    let credential = {
        user : kind == 1 ? form.form.value.user : p_finger.usuario,
        pass : kind == 1 ? form.form.value.password : p_finger.password
    }

    await this.present()
    let id_onesignal = await this.storage.get('id_onesignal')
    this.Pro_user.login(credential.user, credential.pass, id_onesignal).subscribe(async resp=>{
      if (resp!=null) {
        if (resp.token) {
          await this.storage.set('token',resp.token)
          this.vibration.vibrate(500);
          await this.dismiss()
          this.router.navigate(['/home'])
        }
      }
      else{
        await this.dismiss()
        await this.showToast('Credenciales no validas')
      }
    }, async err=>{
      await this.dismiss()
    });
  }

  async loginFinger(){
    this.storage.get('finger').then(finger =>{
      if (finger == 'on') {
        this.faio.show({
          clientId: 'FingerprintCredential',
          clientSecret: 'o7aoOMYUbyxaD23oFAnJ',
          disableBackup:true,
      })
      .then( async result => {
        let finger = await this.Pro_user.loginFinger()
        console.log(finger)
        this.login(null, 2, finger)
      })
      .catch((error: any) => console.log(error));
      }
    })
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 2000
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => {});
        }
      });
    });
  }

  async showToast(p_mensaje, p_duration=2000){
    const toast = await this.toastController.create({
      message: p_mensaje,
      duration: p_duration,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {});
  }
}
