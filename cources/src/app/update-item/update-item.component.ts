import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourcesService} from '../cources.service';
import { ICourceItem } from '../icourceitem';
import { TouchSequence } from 'selenium-webdriver';
import {Router} from "@angular/router"
import { CourceItem } from '../cource-item';
import { OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [CourcesService]
})
export class UpdateItemComponent implements OnInit {

  private id: number;
  private sub: Subscription;
  public isNew: boolean
  public courceItem : ICourceItem;
  public pageTitle : string;
  constructor(private route: ActivatedRoute, private courcesService: CourcesService, private router: Router) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.isNew = false;
      if(this.id > 0)
      {
       this.courceItem = this.courcesService.getCourceById(this.id);
       this.pageTitle = "Update cource item";
      }
      else
      {
       this.courceItem = new CourceItem();
       this.isNew = true;
       this.pageTitle = "Add cource item";
      }
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  update()
  {
      this.courcesService.updateCourceObject(this.courceItem);
      this.router.navigate(['/cources'])
  }
}
