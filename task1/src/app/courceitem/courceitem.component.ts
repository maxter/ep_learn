import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourceItem } from '../cource-item';

@Component({
  selector: 'app-courceitem',
  templateUrl: './courceitem.component.html',
  styleUrls: ['./courceitem.component.css']
})
export class CourceitemComponent implements OnInit {
 
  @Input() courceItem : CourceItem;
  courceId: number;

  constructor() { }

  ngOnInit() {
    this.courceId = this.courceItem.Id;
  }

  @Output() deleteCourceEvent = new EventEmitter<number>();

  deleteCource() {
    this.deleteCourceEvent.next(this.courceId);
  }

}

