import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Output() searchCourceEvent = new EventEmitter<string>();

  searchText : string = "";

  constructor() { }

  ngOnInit() {
  }

  searchCource() : void {
   this.searchCourceEvent.emit(this.searchText);
  }

}
