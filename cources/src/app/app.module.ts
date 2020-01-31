import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
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
import { UpdateItemComponent } from './update-item/update-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from  '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader.interceptor';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { StoreModule } from '@ngrx/store';
import { CourcesReducer } from './redux/cources.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourcesEffects } from './redux/cources.effects'


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
    SearchPipe,
    UpdateItemComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ cources: CourcesReducer }),
    EffectsModule.forRoot([CourcesEffects]),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [AuthGuardService,   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, LoaderService,
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
