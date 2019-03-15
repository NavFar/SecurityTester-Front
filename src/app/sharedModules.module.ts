import { NgModule } from '@angular/core';
import { RecaptchaModule ,RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    RecaptchaModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports: [
    RecaptchaModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'fa',},
  ],
  declarations:[],
})
export class SharedModulesModule {}
