import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router} from "@angular/router"
import { CourceItem } from '../cource-item';
import { ActivatedRoute } from '@angular/router';
import {CourcesService} from '../cources.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService, CourcesService]
})
export class NavComponent implements OnInit {

  private id: number;
  private sub: Subscription;

  constructor(private authService:AuthService, private route: ActivatedRoute, private courcesService: CourcesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      var x = 3;
   });
  }

  public get BreadCrumb(): string {
   if(this.authService.isAuthenticated()) 
     
     var courceName;
     if(this.id)
       courceName = " → " + this.courcesService.getCourceById(this.id).Title;
      else
       courceName = "";
     return 'Cources ' + courceName;
  }

}
