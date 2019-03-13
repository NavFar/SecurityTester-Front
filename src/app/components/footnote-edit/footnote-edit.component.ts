import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footnote-edit',
  templateUrl: './footnote-edit.component.html',
  styleUrls: ['./footnote-edit.component.css']
})
export class FootnoteEditComponent implements OnInit {

  copyrightEdit:string;
  submitButton:string;
  notShowCopyright:string;
  constructor() {
    this.copyrightEdit="ویرایش متن کپی رایت سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowCopyright="عدم نمایش متن کپی رایت";
   }
  ngOnInit() {
  }

}
