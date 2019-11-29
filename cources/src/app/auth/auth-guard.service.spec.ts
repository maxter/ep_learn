import { TestBed } from '@angular/core/testing';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from './auth-guard.service';
import { RouterMock } from '../test/router-mock'
import { AuthMock } from '../test/auth-mock';

describe('AuthGuardService', () => {
  

  let router: Router;
  let auth = new AuthMock();
  let service : AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
       {provide: Router, useClass: RouterMock},
       {provide: AuthService, useValue: auth}
      ],
    });
    service = TestBed.get(AuthGuardService);
    router = TestBed.get(Router);
    auth = TestBed.get(AuthService);
  });

  it('should activate if authinticated', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    const auth: AuthService = TestBed.get(AuthService);
    auth.auth("user","12345");
    expect(service.canActivate()).toBe(true);
  });

  it('should NOT activate if NOT authinticated', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    const auth: AuthService = TestBed.get(AuthService);
    auth.auth("wrong user","wrong password");
    expect(service.canActivate()).toBe(false);
  });
});
