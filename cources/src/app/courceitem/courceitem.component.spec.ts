import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceItem } from '../cource-item';
import { CourceitemComponent } from './courceitem.component';
import { ICourceItem } from '../icourceitem';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LessonPipe } from '../duration.pipe';
import { CourceItemDateDirective} from '../cource-item-date.directive';
import { MinLengthValidator } from '@angular/forms';

describe('CourceitemComponent', () => {
  let sut: CourceitemComponent;
  let fixture: ComponentFixture<CourceitemComponent>;

  let courceItem : ICourceItem = new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1",false);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceitemComponent, LessonPipe, CourceItemDateDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
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

    expect(cap.textContent).toBe(courceItem.Title.toUpperCase());
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

    expect(cap.textContent).toBe(String(courceItem.DurationMin) + " min. ");
  });

  
  it('should have a cource time', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const captionDebugElement = debugElement.query(By.css('.conduct'));
    const cap = captionDebugElement.nativeElement;

    expect(cap.textContent).toBe('01.10.2019');
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
