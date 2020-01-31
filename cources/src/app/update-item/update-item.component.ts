import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourcesService} from '../cources.service';
import { ICourceItem } from '../icourceitem';
import { TouchSequence } from 'selenium-webdriver';
import {Router} from "@angular/router"
import { CourceItem } from '../cource-item';
import { OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CourceSave} from '../redux/cources.actions';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [CourcesService]
})
export class UpdateItemComponent implements OnInit {

  courceForm: FormGroup;

  cources$: Observable<CourceItem[]>;

  private id: number;
  private sub: Subscription;
  public isNew: boolean
  public courceItem : ICourceItem;
  public pageTitle : string;
  
  constructor(private fb: FormBuilder, private store: Store<{ cources: CourceItem[] }>, private route: ActivatedRoute, private courcesService: CourcesService, private router: Router) { 
    this.cources$ = store.pipe(select('cources'));
  }

  ngOnInit() {

    this.initForm();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.isNew = false;
      if(this.id > 0)
      {
       this.courceItem = this.courcesService.getCourceById(this.id);
       this.pageTitle = "Update cource item";
      }
      else
      {
       this.courceItem = new CourceItem();
       this.isNew = true;
       this.pageTitle = "Add cource item";
      }
   });
  }

  initForm(){
    this.courceForm = this.fb.group({
     Title: ['cource title', [
      Validators.required,
      Validators.maxLength(50)
     ]
    ],
     Description: [null, [
      Validators.required,
      Validators.maxLength(500)
     ]
    ],
     Length: [null,
      [
        Validators.required,
        Validators.pattern('^[0-9]+$')
       ]]
    });
  }

  isControlInvalid(controlName: string): boolean {
     const control = this.courceForm.controls[controlName];
     const result = control.invalid && control.touched;
     return result;
  }

  onSubmit() {
    const controls = this.courceForm.controls;
    
     if (this.courceForm.invalid) {

      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
       

       return;
      }

    const item = new CourceItem();
    
    item.Title = this.courceForm.controls["Title"].value;
    item.DurationMin = this.courceForm.controls["Length"].value;
    item.Description = this.courceForm.controls["Description"].value;

    this.store.dispatch(new CourceSave(item));
    this.router.navigate(['/cources']);
    

     console.log(this.courceForm.value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  update()
  {

    const item = new CourceItem();
    item.Title = this.courceItem.Title;
    this.store.dispatch(new CourceSave(item));
    this.router.navigate(['/cources']);

     /* this.courcesService.updateCourceObject(this.courceItem);
      this.router.navigate(['/cources'])*/
  }

  cancel()
  {
    this.router.navigate(['/cources'])
  }
  
}
