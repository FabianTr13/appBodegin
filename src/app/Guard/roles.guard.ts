import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(private storage:Storage,
              private Pro_user:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
  ):Promise<boolean> | boolean {
     return this.Pro_user.validaPerfil();
  }
}
