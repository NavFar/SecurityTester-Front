import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {LoginComponent} from './components/login/login.component';
import {AdminBaseComponent} from './components/admin-base/admin-base.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminBaseComponent,children:[
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', outlet:'adminRouter' },
  ] },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
