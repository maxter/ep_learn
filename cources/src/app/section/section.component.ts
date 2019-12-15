import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router"
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  searchInput: string;
  modelChanged: Subject<string> = new Subject<string>();

  @Output() searchCourceEvent = new EventEmitter<string>();

  constructor(private router: Router) { 
    this.modelChanged
    .debounceTime(300) // wait 300ms after the last event before emitting last event
    .distinctUntilChanged() // only emit if value is different from previous value
    .subscribe(model =>
      { 
        if(model.length>2)
          this.searchCourceEvent.emit(model)
      });
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  ngOnInit() {
  }

  new()
  {
    this.router.navigate(['/cources/new'])
  }

}
