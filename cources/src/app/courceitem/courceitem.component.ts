import { Component, OnInit, Input, Output, EventEmitter, Pipe, ChangeDetectionStrategy } from '@angular/core';
import { CourceItem } from '../cource-item';
import { ICourceItem } from '../icourceitem';
import { CourceItemDateDirective} from '../cource-item-date.directive';
import { LessonPipe } from '../duration.pipe';

@Component({
  selector: 'app-courceitem',
  templateUrl: './courceitem.component.html',
  styleUrls: ['./courceitem.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourceitemComponent implements OnInit {
 
  @Input() courceItem : ICourceItem;
  @Output() deleteCourceEvent = new EventEmitter<number>();
  
  get courceId() {
    return this.courceItem.Id;
  }

  constructor() { 
  }

  ngOnInit() {
  }

  deleteCource() : void {
    this.deleteCourceEvent.emit(this.courceItem.Id);
  }
}

