// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CourceitemComponent } from './courceitem.component';
// import { Component } from '@angular/core';
// import { By } from "@angular/platform-browser";
// import { CourceItem } from '../cource-item';

// @Component({
//     template: `
//     <app-courceitem (deleteCourceEvent)="deleteCource($event)"
//      [courceItem]="item" *ngFor="let item of cources"></app-courceitem>`
//   })
//   class TestHostComponent {
//     public courceItem: CourceItem  =  { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" }
//   }
  
//   describe('PublicationCardComponent', () => {
//     let testHost: TestHostComponent;
//     let fixture: ComponentFixture<TestHostComponent>;
//     let courceItem: CourceItem;
  
//     beforeEach(() => {   
//       TestBed.configureTestingModule({
//         declarations: [ CourceitemComponent, TestHostComponent ]
//       })
//     });
  
//     beforeEach(() => {
//       fixture = TestBed.createComponent(TestHostComponent);
//       testHost = fixture.componentInstance;
//     });

  
//     it('should raise cource delete', () => {
//       fixture.detectChanges();
  
//       const expectedLikedPublication =  { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" }
  
//       const deleteButton = fixture.debugElement.query(By.css('.like-button'));
//       deleteButton.triggerEventHandler('click', null);
  
//       expect(testHost.likedPublication).toEqual(expectedLikedPublication);
//     });
//   });
  




