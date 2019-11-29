import { NavComponent } from './nav.component';
import { AuthMock } from '../test/auth-mock';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/auth.service';

describe('NavComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NavComponent,
      {provide: AuthService, useClass: AuthMock}]
  }));

  it('should be created', () => {
    const com: NavComponent = TestBed.get(NavComponent);
    expect(NavComponent).toBeTruthy();
  });

  it('Bread crumbs should show "Cources"', () => {
    const nav: NavComponent = TestBed.get(NavComponent);
    expect(nav.BreadCrumb).toBe('Cources');
  });
});
