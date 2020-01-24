import { EffectsModule } from '@ngrx/effects';
import { Component, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import { CourcesService } from '../cources.service';
import { StoreModule } from '@ngrx/store';
import { ActionEx, CourcesActionTypes, LoadCourcesSuccess, CourceAdd } from './cources.actions';
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
  ) { }


  @Effect()
  loadMovies$ = this.actions$.ofType(CourcesActionTypes.LOAD_COURCES).pipe(
    switchMap((action: ActionEx) => {

      console.log('payload :', action.payload);

      return this.courceService
        .getObservableCources()
        .pipe(
          map(cources => {
            console.log(cources);
            return new LoadCourcesSuccess(cources)
          })
        );
    })
  );



  @Effect() 
  addCourse$: Observable<Action> = this.actions$
    .ofType(CourcesActionTypes.Save)
    .do((action: ActionEx) => {
       console.log(action.payload);
     // return new CourceAdd(action.payload);
    });


  // @Effect()
  // addCourse$ = this.actions$.ofType(CourcesActionTypes.Save).pipe(
  //   switchMap((action: ActionEx) => this.courceService.addCourceObject(action.payload)),
  //   //switchMap((action: ActionEx) => (new CourceAdd(action.payload)))
  // );




}




















// import { EffectsModule } from '@ngrx/effects';
// import { Component, Inject } from '@angular/core';
// import {Action} from '@ngrx/store';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Effect, Actions } from '@ngrx/effects';
// import { CourcesService } from '../cources.service'; 
// import { StoreModule } from '@ngrx/store';
// import {ActionEx, CourcesActionTypes, LoadCourcesSuccess} from './cources.actions';
// import { of } from 'rxjs/observable/of';
// import { map, switchMap, catchError } from 'rxjs/operators';
// import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import {
//     pipe
//   } from 'rxjs';

//   import 'rxjs';
  

// @Injectable()
// export class CourcesEffects {
//   constructor(
//     private actions$: Actions,
//     private courceService: CourcesService
//   ) {}


//   @Effect()
//   loadMovies$ = this.actions$.ofType(CourcesActionTypes.LOAD_COURCES).pipe(
//     switchMap(() => {
//       return this.courceService
//         .getObservableCources()
//         .pipe(
//           map(cources => new LoadCourcesSuccess(cources))
//         );
//     })
//   );


// //   @Effect() 
// //   loadAllCources$: Observable<Action> = this.actions$
// //     .ofType('CREATE', 'UPDATE')
// //     .do(action => {
// //        console.log(action);
// //     });

// }