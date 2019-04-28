import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared.module';

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
import { AllResultsComponent } from './components/all-results/all-results.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqEditComponent } from './components/faq-edit/faq-edit.component';



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
    AllResultsComponent,
    FaqListComponent,
    FaqEditComponent,

  ],
  imports: [
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    QuillModule,
    // QuillModule.forRoot({
        // modules: {
          // toolbar:
          // [
              // [{ 'size': [false, '10', '16', '22', '36', '48', '72', '144'] }]
              // [{ 'size': [false, '10', '16', '22', '36', '48', '72', '144'] }],
              // ['bold', 'italic', 'underline', 'strike'],
              // [{ 'color': [] }, { 'background': [] }],
              // [{ 'align': [false, 'center', 'right', 'justify'] }],
              // [{ 'indent': '-1' }, { 'indent': '+1' }],
              // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          // ]
        // }
      // }),
    TreeModule.forRoot(),
  ]
})
export class AdminModule { }
