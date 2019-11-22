import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourcesComponent } from './cources/cources.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path : 'auth', loadChildren : './auth/auth.module#AuthModule'},
  { path: 'cources', component: CourcesComponent, canActivate: [AuthGuardService]  },
  { path: '', redirectTo: '/cources', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
