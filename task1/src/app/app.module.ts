import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { CourcesComponent } from './cources/cources.component';
import { FormsModule }   from '@angular/forms';


const routes: Routes = [
  { path: 'cources', component: CourcesComponent },
  { path: '', redirectTo: '/cources', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    PageComponent,
    NavComponent,
    SectionComponent,
    CourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
