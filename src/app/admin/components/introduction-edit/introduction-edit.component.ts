import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-introduction-edit',
  templateUrl: './introduction-edit.component.html',
  styleUrls: ['./introduction-edit.component.css']
})
export class IntroductionEditComponent implements OnInit {

  introductionEdit:string;
  submitButton:string;
  notShowIntroduction:string;
  constructor() {
    this.introductionEdit="ویرایش متن معرفی سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowIntroduction="عدم نمایش متن معرفی سایت";
   }
  ngOnInit() {
  }

}
