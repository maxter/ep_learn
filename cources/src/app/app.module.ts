import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { CourcesComponent } from './cources/cources.component';
import { FormsModule }   from '@angular/forms';
import { CourceitemComponent } from './courceitem/courceitem.component';
import { CourceItemDateDirective} from './cource-item-date.directive';
import { LessonPipe } from './duration.pipe';
import { OrderByPipe } from './orderby.pipe';
import { SearchPipe } from './search.pipe';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'cources', component: CourcesComponent, canActivate: [AuthGuardService]  },
  { path: '', redirectTo: '/cources', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavComponent,
    SectionComponent,
    CourcesComponent,
    CourceitemComponent,
    CourceItemDateDirective,
    LessonPipe,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
