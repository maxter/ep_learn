import { Component, OnInit } from '@angular/core';
import { ICourceItem } from '../icourceitem';
import { CourceItem } from '../cource-item';


@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {


  cources: ICourceItem[] = 
  [new CourceItem(1, "lesson 1", new Date('04.01.2020'), 5, "Some description 1"),
  new CourceItem(2, "lesson 2", new Date('03.01.2020'), 40, "Some description 2"),
  new CourceItem(3, "lesson 3", new Date('04.04.2021'), 60, "Some description 3")]

  constructor() { }

  ngOnInit() {
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
  }

}
