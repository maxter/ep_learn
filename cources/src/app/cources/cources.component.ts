import { Component, OnInit } from '@angular/core';
import { ICourceItem } from '../icourceitem';
import { CourceItem } from '../cource-item';
import { OrderByPipe } from '../orderby.pipe';
import { SearchPipe } from '../search.pipe';
import {CourcesService} from '../cources.service';
import { Subscription } from 'rxjs';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css'],
  providers: [CourcesService]
})
export class CourcesComponent implements OnInit {

  filterargs = {Title: 'test'};
  searchText = "";
  cources: ICourceItem[] = [];  
  private sub: Subscription;
  private id: number;

  constructor(private courcesService: CourcesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });

    if(this.id > 0)
      this.cources.push(this.courcesService.getCourceById(this.id));
    else
      this.cources=this.courcesService.getCources();

    this.logIt(`OnInit`);
  }

  ngOnChanges()
  {
    this.logIt(`ngOnChanges`);
  }
 
  ngDoCheck()
  {
    this.logIt(`ngDoCheck`);
  }
  
  ngAfterContentInit()
  {
    this.logIt(`ngAfterContentInit`);
  }
  
  ngAfterContentChecked()
  {
    this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit()
  {
    this.logIt(`ngAfterViewInit`);
  }
 
  ngAfterViewChecked()
  {
    this.logIt(`ngAfterViewChecked`);
  }
  
  ngOnDestroy()
  {
    this.logIt(`ngOnDestroy`);
  }

  logIt(msg: string) {
    console.log(msg);
  }

  deleteCource(courceId:number)
  {
    console.log(`deleting cource with ID ${courceId}`)
    this.courcesService.removeCource(courceId);
  }

  search(search:string)
  {
    this.searchText = search;
    console.log(`searching cource ${search}`)
  }

}
