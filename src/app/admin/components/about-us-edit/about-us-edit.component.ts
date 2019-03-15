import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-about-us-edit',
  templateUrl: './about-us-edit.component.html',
  styleUrls: ['./about-us-edit.component.css']
})
export class AboutUsEditComponent implements OnInit {

  aboutUsEdit:string;
  submitButton:string;
  notShowAboutUs:string;
  constructor() {
    this.aboutUsEdit="ویرایش متن درباره ما";
    this.submitButton = "اعمال تغییرات";
    this.notShowAboutUs="عدم نمایش متن درباره ما";
   }
  ngOnInit() {
  }

}
