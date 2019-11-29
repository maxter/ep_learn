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

  public logOff()
  {
    localStorage.setItem('isAuth',"false");
    localStorage.setItem('user',"");
    this.router.navigate(['/login'])
  }

  public getLoggedUser() : String
  {
     return localStorage.getItem('user');
  }

  public auth(user:String, password:String)
  {
    if(user==="user" && password==="12345")
    {
      localStorage.setItem('isAuth',"true");
      localStorage.setItem('user',user.toString());
      this.router.navigate(['/cources'])
    }
  }
}