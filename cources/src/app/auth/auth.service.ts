import { Injectable } from '@angular/core';
import {Router} from "@angular/router"


@Injectable({
  providedIn:'root'
})

export class AuthService {
  constructor(private router: Router) {}

  public isAuthenticated(): boolean {
    let isAuth = localStorage.getItem('isAuth');
    if(isAuth=="true")
    {
      return true;
    }
    return false;
  }

  public LogOff()
  {
    localStorage.setItem('isAuth',"false");
    this.router.navigate(['/login'])
  }
}