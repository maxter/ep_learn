import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceItem } from '../cource-item';
import { CourceitemComponent } from './courceitem.component';
import { ICourceItem } from '../icourceitem';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourceitemComponent', () => {
  let sut: CourceitemComponent;
  let fixture: ComponentFixture<CourceitemComponent>;

  let courceItem: ICourceItem;

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
    courceItem.ConductAt = new Date('01.01.2020');
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


  it('should have a cource description', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.course_text'));
    const cap = captionDebugElement.nativeElement;

    expect(cap.textContent).toBe(courceItem.Description);
  });

  
  it('should have a cource duration', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.duration'));
    const cap = captionDebugElement.nativeElement;

    expect(cap.textContent).toBe(String(courceItem.DurationMin));
  });

  
  it('should have a cource time', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.conduct'));
    const cap = captionDebugElement.nativeElement;

    expect(cap.textContent).toBe('01.01.2020');
  });


  it('should have edit button', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.edit-button'));
    const cap = captionDebugElement.nativeElement;

    expect(cap).toBeTruthy();
  });

  it('should have delete button', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.delete-button'));
    const cap = captionDebugElement.nativeElement;

    expect(cap).toBeTruthy();
  });
});
