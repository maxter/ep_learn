import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterMock } from '../test/router-mock'

describe('AuthService', () => {

  let router: Router;
  let service : AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthService,{provide: Router, useClass: RouterMock}]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
       AuthService,{provide: Router, useClass: RouterMock}
      ],
    });
    router = TestBed.get(Router);
    service = TestBed.get(AuthService);
  });



  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });


  it('should navigate', () => {
    const service: AuthService = TestBed.get(AuthService);
    const navigateSpy = spyOn(router, 'navigate');

    service.auth("user","12345")
    expect(navigateSpy).toHaveBeenCalledWith(['/cources']);
});

});
