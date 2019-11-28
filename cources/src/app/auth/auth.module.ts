import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,FormsModule
  ],
  providers:[AuthService, AuthGuardService],
  exports: [LoginComponent]
})
export class AuthModule { }
