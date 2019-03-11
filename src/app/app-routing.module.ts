import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { FirstPageDashboardComponent } from './components/first-page-dashboard/first-page-dashboard.component';
import { SiteOptionsDashboardComponent } from './components/site-options-dashboard/site-options-dashboard.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ReportsOptionsComponent } from './components/reports-options/reports-options.component';
import { TitleEditComponent } from './components/title-edit/title-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminBaseComponent,children:[
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'firstPageDashboard', component: FirstPageDashboardComponent,  outlet:'adminRouter', children:[
      { path: 'titleEdit', component: TitleEditComponent, pathMatch: 'full', outlet:'adminRouter' },
    ] },
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
