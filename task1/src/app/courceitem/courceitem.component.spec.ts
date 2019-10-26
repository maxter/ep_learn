import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceitemComponent } from './courceitem.component';

describe('CourceitemComponent', () => {
  let component: CourceitemComponent;
  let fixture: ComponentFixture<CourceitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
