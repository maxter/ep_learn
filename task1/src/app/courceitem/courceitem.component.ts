import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courceitem',
  templateUrl: './courceitem.component.html',
  styleUrls: ['./courceitem.component.css']
})
export class CourceitemComponent implements OnInit {
 
  @Input() courceItem : any

  constructor() { }

  ngOnInit() {
  }

}

