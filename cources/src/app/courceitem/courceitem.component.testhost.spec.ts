import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceitemComponent } from './courceitem.component';
import { Component } from '@angular/core';
import { By } from "@angular/platform-browser";
import { ICourceItem } from '../icourceitem';
import { CourceItem } from '../cource-item';
import { DebugElement } from '@angular/core';
import { OrderByPipe } from '../orderby.pipe';
import { SearchPipe } from '../search.pipe';
import { LessonPipe } from '../duration.pipe';
import { CourceItemDateDirective} from '../cource-item-date.directive';


@Component({
    template: `<app-courceitem (deleteCourceEvent)="deleteCource($event)" [courceItem]="item" *ngFor="let item of courcesList  | search : 'Title' : searchText | orderby:'-ConductAt'"></app-courceitem>`
  })
  class TestHostComponent {

    public courcesList: ICourceItem[] = [new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1",false),
    new CourceItem(2, "lesson 2", '11.04.2019', 80, "Some description 2",true),
    new CourceItem(3, "lesson 3 test", '04.04.2001', 60, "Some description 3",false)]

    public deletedCourceId : number;
    public deleteCource(deletedCourceId: number) { this.deletedCourceId = deletedCourceId}
  }
  
  describe('PublicationCardComponent', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
  
    beforeEach(() => {   
      TestBed.configureTestingModule({
        declarations: [ CourceitemComponent, TestHostComponent, LessonPipe, CourceItemDateDirective, OrderByPipe, SearchPipe ]
      })
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
    });

  
  it('should raise cource delete event when peress de13,00lete button (output check)', () => {
      fixture.detectChanges();

      const expectedDeletedCourceId = 2;  
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
  




