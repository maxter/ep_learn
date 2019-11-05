import { Component, OnInit } from '@angular/core';
import { CourceItemDateDirective} from '../cource-item-date.directive';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  get BreadCrumb(): string {
    return 'Cources';
  }

}
