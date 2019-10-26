import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

 // courceItem = {"title":"lesson 1"}


 cources: { title: string }[] = [
    { "title": "lesson 1" },
    { "title": "lesson 2" },
    { "title": "lesson 3" }
 ];



  constructor() { }

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    console.log('OnInitCources');
  }

  


}
