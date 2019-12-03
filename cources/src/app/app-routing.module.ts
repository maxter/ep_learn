import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourcesComponent } from './cources/cources.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: 'cources/new', component: UpdateItemComponent  },
  { path: 'cources', component: CourcesComponent, canActivate: [AuthGuardService]  },
  { path: 'cources/:id', component: CourcesComponent, canActivate: [AuthGuardService]  },
  { path: 'update/:id', component: UpdateItemComponent  },
  { path: 'add', component: UpdateItemComponent  },

  { path: '', redirectTo: '/cources', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
