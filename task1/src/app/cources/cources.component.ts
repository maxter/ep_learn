import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  cources: { title: string, conductAt:Date, durationMin:number, description:string }[] = [
      { "title": "lesson 1", conductAt:new Date('04.01.2020'), durationMin:50, description:"Some description 1" },
      { "title": "lesson 2", conductAt:new Date('03.01.2020'), durationMin:40, description:"Some description 2"  },
      { "title": "lesson 3", conductAt:new Date('04.04.2021'), durationMin:60, description:"Some description 3"  }
  ];

  constructor() { }

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    console.log('OnInitCources');
  }

  


}
