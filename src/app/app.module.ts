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
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FirstPageDashboardComponent } from './components/first-page-dashboard/first-page-dashboard.component';
import { SiteOptionsDashboardComponent } from './components/site-options-dashboard/site-options-dashboard.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ReportsOptionsComponent } from './components/reports-options/reports-options.component';

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
    SideNavComponent,
    FirstPageDashboardComponent,
    SiteOptionsDashboardComponent,
    UploaderComponent,
    ReportsOptionsComponent,
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
