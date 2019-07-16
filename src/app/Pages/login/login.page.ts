import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Pro_user:UserService,
              private router: Router,
              private storage: Storage,
              public loadingController: LoadingController) {
                this.storage.get('usuario').then(resp=>{
                    this.usuario = resp
                    this.storage.remove('usuario').then(rr=>{})
                })
              }

  ngOnInit() {
  }

  isLoading = false;
  usuario = null

  async login(form:NgForm){
    await this.present()
    this.Pro_user.login(form.form.value.user, form.form.value.password).subscribe(async resp=>{
      if (resp!=null) {
        if (resp.token) {
          await this.storage.set('token',resp.token)
          await this.dismiss()
          this.router.navigate(['/home'])
        }
      }
    }, async err=>{
      await this.dismiss()
    });
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 2000,
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
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
