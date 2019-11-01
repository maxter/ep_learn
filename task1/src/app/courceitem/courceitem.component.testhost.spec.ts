import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceitemComponent } from './courceitem.component';
import { Component } from '@angular/core';
import { By } from "@angular/platform-browser";
import { CourceItem } from '../cource-item';

@Component({
    template: `
    <app-courceitem (deleteCourceEvent)="deleteCource($event)"
     [courceItem]="courceItem"></app-courceitem>`
  })
  class TestHostComponent {
    public courceItem: CourceItem  =  { Id:1, Title: "lesson 1", ConductAt:new Date('04.01.2020'), DurationMin:50, Description:"Some description 1" }
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

  
    it('should raise cource delete', () => {
      fixture.detectChanges();

      const expectedDeletedCourceId = 1;  
      const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
      deleteButton.triggerEventHandler('click', null);
  
      expect(testHost.deletedCourceId).toEqual(expectedDeletedCourceId);
    });
  });
  




