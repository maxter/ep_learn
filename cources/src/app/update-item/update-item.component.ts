import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourcesService} from '../cources.service';
import { ICourceItem } from '../icourceitem';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [CourcesService]
})
export class UpdateItemComponent implements OnInit {

  private id: number;
  private sub: any;
  private courceItem : ICourceItem;
  constructor(private route: ActivatedRoute, private courcesService: CourcesService) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id);
   });
  
   this.courceItem = this.courcesService.getCourceById(this.id);;
  }

}
