import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})

export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    let isAuth = localStorage.getItem('isAuth');
    if(isAuth=="true")
    {
      return true;
    }
    return false;
  }
}