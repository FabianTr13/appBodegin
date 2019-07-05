import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../Services/token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private token:TokenService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
  ):Promise<boolean> | boolean {
     return this.token.validaToken();
  }
}
