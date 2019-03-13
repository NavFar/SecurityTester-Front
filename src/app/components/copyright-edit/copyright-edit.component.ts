import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright-edit',
  templateUrl: './copyright-edit.component.html',
  styleUrls: ['./copyright-edit.component.css']
})
export class CopyrightEditComponent implements OnInit {

  copyrightEdit:string;
  submitButton:string;
  notShowCopyright:string;
  constructor() {
    this.copyrightEdit="ویرایش متن زیرنویس سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowCopyright="عدم نمایش متن زیرنویس";
   }
  ngOnInit() {
  }

}
