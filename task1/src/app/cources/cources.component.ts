import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  cources: { Id:number, Title: string, ConductAt:Date, DurationMin:number, Description:string }[] = [
      { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" },
      { Id:2, Title: "lesson 2", ConductAt:new Date('03.01.2020'), DurationMin:40, Description:"Some description 2"  },
      { Id:3, Title: "lesson 3", ConductAt:new Date('04.04.2021'), DurationMin:60, Description:"Some description 3"  }
  ];

  constructor() { }

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    console.log('OnInitCources');
  }

  deleteCource(courceId:any)
  {
    console.log("deleting cource with ID : " + courceId)
  }

}
