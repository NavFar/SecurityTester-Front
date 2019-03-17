import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-footnote-edit',
  templateUrl: './footnote-edit.component.html',
  styleUrls: ['./footnote-edit.component.css']
})
export class FootnoteEditComponent implements OnInit {

  footnoteEdit:string;
  notShowFootnote:string;
  submitButton:string;
  constructor() {
    this.footnoteEdit="ویرایش متن زیرنویس";
    this.submitButton = "اعمال تغییرات";
    this.notShowFootnote="عدم نمایش متن زیرنویس";
   }
  ngOnInit() {
  }

}
