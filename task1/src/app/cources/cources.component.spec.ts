import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../section/section.component';
import { CourcesComponent } from './cources.component';
import { CourceitemComponent } from '../courceitem/courceitem.component';
import { FormsModule }   from '@angular/forms';

describe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ CourcesComponent, SectionComponent, CourceitemComponent ]
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
