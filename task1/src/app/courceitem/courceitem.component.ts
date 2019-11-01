import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourceItem } from '../cource-item';

@Component({
  selector: 'app-courceitem',
  templateUrl: './courceitem.component.html',
  styleUrls: ['./courceitem.component.css']
})
export class CourceitemComponent implements OnInit {
 
  @Input() courceItem : CourceItem;
  @Output() deleteCourceEvent = new EventEmitter<number>();
  
  courceId: number;

  constructor() { }

  ngOnInit() {
    if(this.courceItem)
      this.courceId = this.courceItem.Id;
  }

  deleteCource() {
 //  this.deleteCourceEvent.next(this.courceId);
 this.deleteCourceEvent.emit(this.courceItem.Id);
  }

}

