import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService]
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }


  get BreadCrumb(): string {
   if(this.authService.isAuthenticated()) 
     return 'Cources';
    return '';
  }

}
