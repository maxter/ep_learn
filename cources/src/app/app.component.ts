import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LOAD_COURCES} from './redux/cources.actions';
import { CourceItem } from './cource-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  constructor(private store: Store<{ cources: CourceItem[] }>) {
    this.store.dispatch(new LOAD_COURCES(null));
  }
  
  

}