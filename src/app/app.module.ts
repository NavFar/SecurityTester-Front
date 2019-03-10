import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule ,RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SideBreadcrumbComponent } from './side-breadcrumb/side-breadcrumb.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    LoginComponent,
    SideBreadcrumbComponent,
    DashboardComponent,
    AdminBaseComponent,
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'fa',},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
