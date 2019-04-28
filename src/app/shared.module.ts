import { NgModule } from '@angular/core';
import { JalaliPipe } from './pipes/jalali/jalali.pipe';
import { PersianNumberPipe } from './pipes/persian-number/persian-number.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[
    JalaliPipe,
    PersianNumberPipe,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
        positionClass: 'toast-top-center',
        maxOpened :2,
        timeOut:3000
      }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD8Z6q_Dh9ufSV21tgT8D--UQalfM4Tgk'
    }),
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    JalaliPipe,
    PersianNumberPipe,
    ToastrModule,
    AgmCoreModule,
    PaginatorComponent,
  ],
})
export class SharedModule { }
