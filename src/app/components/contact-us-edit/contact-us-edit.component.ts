import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-edit',
  templateUrl: './contact-us-edit.component.html',
  styleUrls: ['./contact-us-edit.component.css']
})
export class ContactUsEditComponent implements OnInit {

  contactUsEdit:string;
  submitButton:string;
  notShowContactUs:string;
  location:string;
  constructor() {
    this.contactUsEdit="ویرایش متن تماس با ما";
    this.submitButton = "اعمال تغییرات";
    this.notShowContactUs="عدم نمایش متن تماس با ما";
    this.location="موقعیت روی نقشه"
   }
  ngOnInit() {
  }

}
