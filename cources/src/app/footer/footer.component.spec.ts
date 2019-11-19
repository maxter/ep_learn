import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display copyrigh', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const crDebugElement = debugElement.query(By.css('.copyright'));
    const cr = crDebugElement.nativeElement;

    expect(cr.textContent).toBe("copyright");
  });

});
