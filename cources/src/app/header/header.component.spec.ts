import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from '../logo/logo.component';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { AuthService } from '../auth/auth.service';
import { AuthMock } from '../test/auth-mock'
import { Router } from '@angular/router';
import { RouterMock } from '../test/router-mock'

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, LogoComponent
      ],
      providers: [
        {provide: AuthService, useClass: AuthMock}, 
        {provide: Router, useClass: RouterMock}
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
  });

 it('should have logoff button', () => {
   fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const crDebugElement = debugElement.query(By.css('.btn-logoff'));
    const cr = crDebugElement.nativeElement;
    expect(cr.textContent).toBeTruthy();
  });

  it('should have login button', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const crDebugElement = debugElement.query(By.css('.btn-login'));
    const cr = crDebugElement.nativeElement;
    expect(cr.textContent).toBeTruthy();
  });
  
});
