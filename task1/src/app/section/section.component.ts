import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  searchText : string = "";

  constructor() { }

  handleClick(event: Event) {
    console.log("search clicked " + this.searchText);
  }

  ngOnInit() {
  }

}
