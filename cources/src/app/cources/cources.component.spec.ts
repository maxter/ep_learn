import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../section/section.component';
import { CourcesComponent } from './cources.component';
import { CourceitemComponent } from '../courceitem/courceitem.component';
import { FormsModule }   from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderByPipe } from '../orderby.pipe';
import { SearchPipe } from '../search.pipe';
import { LessonPipe } from '../duration.pipe';
import {Router} from "@angular/router"
import { RouterMock } from '../test/router-mock'
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from } from 'rxjs';

describe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
      ],
      declarations: [ CourcesComponent, SectionComponent, CourceitemComponent, OrderByPipe, SearchPipe, LessonPipe ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params:from([{id: 1}]),
          },
        },
        {provide: Router, useClass: RouterMock}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
