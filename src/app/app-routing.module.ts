import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { FirstPageDashboardComponent } from './components/first-page-dashboard/first-page-dashboard.component';
import { SiteOptionsDashboardComponent } from './components/site-options-dashboard/site-options-dashboard.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ReportsOptionsComponent } from './components/reports-options/reports-options.component';
import { TitleEditComponent } from './components/title-edit/title-edit.component';
import { MotoEditComponent } from './components/moto-edit/moto-edit.component';
import { IntroductionEditComponent } from './components/introduction-edit/introduction-edit.component';
import { LogoEditComponent } from './components/logo-edit/logo-edit.component';
import { ContactUsEditComponent } from './components/contact-us-edit/contact-us-edit.component';
import { AboutUsEditComponent } from './components/about-us-edit/about-us-edit.component';
import { FootnoteEditComponent } from './components/footnote-edit/footnote-edit.component';
import { CopyrightEditComponent } from './components/copyright-edit/copyright-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminBaseComponent,children:[
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'firstPageDashboard', component: FirstPageDashboardComponent,   outlet:'adminRouter'},
    { path: 'titleEdit', component: TitleEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'motoEdit', component: MotoEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'introductionEdit', component: IntroductionEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'logoEdit', component: LogoEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'contactUsEdit', component: ContactUsEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'aboutUsEdit', component: AboutUsEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'footnoteEdit', component: FootnoteEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'copyrightEdit', component: CopyrightEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'siteOptionsDashboard', component: SiteOptionsDashboardComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'reportsDashboard', component: ReportsOptionsComponent, pathMatch: 'full', outlet:'adminRouter' },
    { path: 'uploader', component: UploaderComponent, pathMatch: 'full', outlet:'adminRouter' },

  ] },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
