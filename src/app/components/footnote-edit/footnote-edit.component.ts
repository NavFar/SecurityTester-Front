import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footnote-edit',
  templateUrl: './footnote-edit.component.html',
  styleUrls: ['./footnote-edit.component.css']
})
export class FootnoteEditComponent implements OnInit {

  footnoteEdit:string;
  submitButton:string;
  notShowFootnote:string;
  constructor() {
    this.footnoteEdit="ویرایش متن زیرنویس سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowFootnote="عدم نمایش متن زیرنویس";
   }
  ngOnInit() {
  }

}
