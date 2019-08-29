import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PagosService } from '../Services/pagos.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PagosGuard implements CanActivate {
  constructor(private Pro_pagos:PagosService,
              private storage:Storage){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
  ):Promise<boolean> | boolean {
    // console.log('no llego')
     return this.Pro_pagos.pago();
  }
}
