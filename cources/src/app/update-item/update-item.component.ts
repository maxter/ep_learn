import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourcesService} from '../cources.service';
import { ICourceItem } from '../icourceitem';
import { TouchSequence } from 'selenium-webdriver';
import {Router} from "@angular/router"
import { CourceItem } from '../cource-item';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [CourcesService]
})
export class UpdateItemComponent implements OnInit {

  private id: number;
  private sub: any;
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

  update(isNew:boolean)
  {

    if(isNew)
    {
      let newId = this.courcesService.getCources().length + 1;
      this.courcesService.addCourceObject(this.courceItem);
      // checking whether service was added
      let servives = this.courcesService.getCources();
    }
    else
    {
      this.courcesService.updateCourceObject(this.courceItem);
      this.router.navigate(['/cources'])
      // checking whether service was updated
      let servives = this.courcesService.getCources();
    }
  }

}
