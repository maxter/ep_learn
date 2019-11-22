import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourcesComponent } from './cources/cources.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: 'cources', component: CourcesComponent, canActivate: [AuthGuardService]  },
  { path: '', redirectTo: '/cources', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
