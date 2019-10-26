import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courceitem',
  templateUrl: './courceitem.component.html',
  styleUrls: ['./courceitem.component.css']
})
export class CourceitemComponent implements OnInit {
 
  @Input() titleCource: string;
  @Input() description: string;
  @Input() durationMin: number;
  @Input() conductAt: Date;

  constructor() { }

  ngOnInit() {
  }

}

