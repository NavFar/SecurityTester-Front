import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResultComponent } from './components/result/result.component';
import { RecentResultsComponent } from './components/recent-results/recent-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'aboutUs', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'recentResults', component: RecentResultsComponent, pathMatch: 'full' },
  { path: 'result/:id', component: ResultComponent, pathMatch: 'full' },
  { path: '' ,loadChildren:'./admin/admin.module#AdminModule'},
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
