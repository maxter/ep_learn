import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
import { HttpClient } from  "@angular/common/http"; 
import { UserAuth } from  '../user-auth'; 
import * as moment from 'moment'


@Injectable({
  providedIn:'root'
})

export class AuthService {
  constructor(private router: Router, private  http:HttpClient) {}

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


    /* SET TOKEN RECIEVED FROM AUTH SERVICE. COMMENTED BECAUSE OF LACK OF BACK END PART
    var userAuth:UserAuth
    userAuth.email = user;
    userAuth.password = password;

     return this.http.post('localhost:3000/login', userAuth)
    .do(res => this.setSession) 
    .shareReplay();
    */

  }


  private setSession(authResult) {
   const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
 }         

}