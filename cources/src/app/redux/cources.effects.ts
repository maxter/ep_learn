import { EffectsModule } from '@ngrx/effects';
import { Component, Inject } from '@angular/core';
import {Action} from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import { CourcesService } from '../cources.service'; 
import { StoreModule } from '@ngrx/store';
import {ActionEx, CourcesActionTypes, LoadCourcesSuccess} from './cources.actions';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {
    pipe
  } from 'rxjs';

  import 'rxjs';
  

@Injectable()
export class CourcesEffects {
  constructor(
    private actions$: Actions,
    private courceService: CourcesService
  ) {}


  @Effect()
  loadMovies$ = this.actions$.ofType(CourcesActionTypes.LOAD_COURCES).pipe(
    switchMap(() => {
      return this.courceService
        .getObservableCources()
        .pipe(
          map(cources => new LoadCourcesSuccess(cources))
        );
    })
  );


//   @Effect() 
//   loadAllCources$: Observable<Action> = this.actions$
//     .ofType('CREATE', 'UPDATE')
//     .do(action => {
//        console.log(action);
//     });

}