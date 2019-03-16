import { NgModule } from '@angular/core';
import { RecaptchaModule ,RECAPTCHA_LANGUAGE ,RecaptchaSettings ,RECAPTCHA_SETTINGS } from 'ng-recaptcha';

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
      useValue: 'fa' ,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: "6LdWKpUUAAAAAPXSHP8T7wd_9qomdXRamOJJ2-mE" } as RecaptchaSettings,
    },
  ],
  declarations:[],
})
export class SharedModulesModule {}
