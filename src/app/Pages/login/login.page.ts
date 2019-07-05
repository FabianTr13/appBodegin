import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Pro_user:UserService,
              private router: Router,
              private storage: Storage) { }

  ngOnInit() {
  }

  login(form:NgForm){
    this.Pro_user.login(form.form.value.user, form.form.value.password).subscribe(resp=>{
      if (resp!=null) {
        if (resp.token) {
          this.storage.set('token',resp.token)
          this.router.navigate(['/home'])
        }  
      }
    });
  }
}
