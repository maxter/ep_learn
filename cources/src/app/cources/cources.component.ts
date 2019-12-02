import { Component, OnInit } from '@angular/core';
import { ICourceItem } from '../icourceitem';
import { CourceItem } from '../cource-item';
import { OrderByPipe } from '../orderby.pipe';
import { SearchPipe } from '../search.pipe';
import {CourcesService} from '../cources.service';



@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css'],
  providers: [CourcesService]
})
export class CourcesComponent implements OnInit {

  filterargs = {Title: 'test'};
  searchText = "";

  cources: ICourceItem[];  


  constructor(private courcesService: CourcesService) { }

  ngOnInit() {
    this.logIt(`OnInit`);
    this.cources = this.courcesService.getCources();
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
