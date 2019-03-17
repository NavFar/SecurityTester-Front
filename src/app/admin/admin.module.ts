import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from '../sharedModules.module'
import { FormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FirstPageDashboardComponent } from './components/first-page-dashboard/first-page-dashboard.component';
import { SiteOptionsDashboardComponent } from './components/site-options-dashboard/site-options-dashboard.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ReportsOptionsComponent } from './components/reports-options/reports-options.component';
import { TitleEditComponent } from './components/title-edit/title-edit.component';
import { MotoEditComponent } from './components/moto-edit/moto-edit.component';
import { IntroductionEditComponent } from './components/introduction-edit/introduction-edit.component';
import { CopyrightEditComponent } from './components/copyright-edit/copyright-edit.component';
import { LogoEditComponent } from './components/logo-edit/logo-edit.component';
import { ContactUsEditComponent } from './components/contact-us-edit/contact-us-edit.component';
import { AboutUsEditComponent } from './components/about-us-edit/about-us-edit.component';
import { FootnoteEditComponent } from './components/footnote-edit/footnote-edit.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminBaseComponent,
    SideNavComponent,
    FirstPageDashboardComponent,
    SiteOptionsDashboardComponent,
    UploaderComponent,
    ReportsOptionsComponent,
    TitleEditComponent,
    MotoEditComponent,
    IntroductionEditComponent,
    CopyrightEditComponent,
    LogoEditComponent,
    ContactUsEditComponent,
    AboutUsEditComponent,
    FootnoteEditComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModulesModule,
    FormsModule,
    QuillModule,
  ]
})
export class AdminModule { }
