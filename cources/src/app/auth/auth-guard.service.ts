import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AuthService } from '.auth//auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
 // constructor(public auth: AuthService, public router: Router) {}
  constructor(public router: Router) {}
  canActivate(): boolean {


    return true;
  //  this.router.navigate(['login']);
    return false;

 /*   if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }*/
    return true;
  }
}