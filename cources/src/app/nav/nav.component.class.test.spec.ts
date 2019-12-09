import { NavComponent } from './nav.component';
import { AuthMock } from '../test/auth-mock';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { CourcesService } from '../cources.service';


describe('NavComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NavComponent,
      CourcesService,
      {provide: AuthService, useClass: AuthMock},
      {
        provide: ActivatedRoute,
        useValue: {
          params:from([{id: 1}]),
        }
      }]
  }));

  it('should be created', () => {
    const com: NavComponent = TestBed.get(NavComponent);
    expect(NavComponent).toBeTruthy();
  });

  it('Bread crumbs should show "Cources"', () => {
    const nav: NavComponent = TestBed.get(NavComponent);
    expect(nav.BreadCrumb).toBe('Cources ');
  });
});
