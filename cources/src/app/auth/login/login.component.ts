import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  public userName : string = "";
  public password : string = "";

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
  }

  login() : void {
      this.authService.auth(this.userName,this.password);
   }

}



