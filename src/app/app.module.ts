import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from './sharedModules.module'
// import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MotoComponent } from './components/moto/moto.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    LoginComponent,
    FaqComponent,
    AboutUsComponent,
    MotoComponent,
    QuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule,
    // AdminModule
  ],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
