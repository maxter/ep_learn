import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { SectionComponent } from './section.component';
import {Router} from "@angular/router"
import { RouterMock } from '../test/router-mock'

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ SectionComponent ],
      providers: [
        {provide: Router, useClass: RouterMock}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
