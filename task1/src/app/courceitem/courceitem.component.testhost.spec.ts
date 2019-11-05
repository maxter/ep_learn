import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceitemComponent } from './courceitem.component';
import { Component } from '@angular/core';
import { By } from "@angular/platform-browser";
import { ICourceItem } from '../icourceitem';
import { DebugElement } from '@angular/core';

@Component({
    template: `<app-courceitem (deleteCourceEvent)="deleteCource($event)" [courceItem]="item" *ngFor="let item of courcesList"></app-courceitem>`
  })
  class TestHostComponent {

    public courcesList: ICourceItem[] = [  { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" },
    { Id:2, Title: "lesson 2", ConductAt:new Date('03.01.2020'), DurationMin:40, Description:"Some description 2"  },
    { Id:3, Title: "lesson 3", ConductAt:new Date('04.04.2021'), DurationMin:60, Description:"Some description 3"  }]

    public deletedCourceId : number;
    public deleteCource(deletedCourceId: number) { this.deletedCourceId = deletedCourceId}
  }
  
  describe('PublicationCardComponent', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
  
    beforeEach(() => {   
      TestBed.configureTestingModule({
        declarations: [ CourceitemComponent, TestHostComponent ]
      })
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
    });

  
    it('should raise cource delete event when peress delete button (output check)', () => {
      fixture.detectChanges();

      const expectedDeletedCourceId = 1;  
      const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
      deleteButton.triggerEventHandler('click', null);
  
      expect(testHost.deletedCourceId).toEqual(expectedDeletedCourceId);
    });


    it('should be Three records', () => {
      fixture.detectChanges();

      const debugElement: DebugElement = fixture.debugElement;
      const itemList = debugElement.queryAll(By.css('.item'));
      expect(itemList.length).toBe(3);
    });
        
  });
  




