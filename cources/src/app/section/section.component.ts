import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Output() searchCourceEvent = new EventEmitter<string>();

  searchText : string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchCource() : void {
   this.searchCourceEvent.emit(this.searchText);
  }

  new()
  {
    this.router.navigate(['/cources/new'])
  }

}
