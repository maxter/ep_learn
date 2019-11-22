import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName : string = "";
  public password : string = "";


  constructor() { }

  ngOnInit() {
  }

  
  login() : void {
    //save to localstorage
    if(this.userName=="user" && this.password=="12345")
       {
        localStorage.setItem('isAuth',"true");

       }
   }

}



