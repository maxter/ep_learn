import { Component, OnInit } from '@angular/core';
import { ICourceItem } from '../icourceitem';


@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {


  cources: ICourceItem[] = [  { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" },
  { Id:2, Title: "lesson 2", ConductAt:new Date('03.01.2020'), DurationMin:40, Description:"Some description 2"  },
  { Id:3, Title: "lesson 3", ConductAt:new Date('04.04.2021'), DurationMin:60, Description:"Some description 3"  }]

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
