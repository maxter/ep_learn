import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return Observable.of(false);
    }
    return  Observable.of(true);
  }   
}