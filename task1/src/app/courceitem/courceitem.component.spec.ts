import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceItem } from '../cource-item';
import { CourceitemComponent } from './courceitem.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourceitemComponent', () => {
  let sut: CourceitemComponent;
  let fixture: ComponentFixture<CourceitemComponent>;

  let courceItem: CourceItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    courceItem = new CourceItem();
    courceItem.Id = 1;
    courceItem.Title= "lesson 1";
    courceItem.ConductAt = new Date('04.01.2020');
    courceItem.DurationMin = 50
    courceItem.Description = "Some description 1";


    fixture = TestBed.createComponent(CourceitemComponent);
    sut = fixture.componentInstance;
    sut.courceItem = courceItem;
    fixture.detectChanges();
  });

  it('should create component item', () => {
    expect(sut).toBeTruthy();
  });


  it('should have a cource title', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.caption'));
    const cap = captionDebugElement.nativeElement;

    expect(cap.textContent).toBe(courceItem.Title);
  });


});
