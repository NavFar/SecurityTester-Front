import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-edit',
  templateUrl: './title-edit.component.html',
  styleUrls: ['./title-edit.component.css']
})
export class TitleEditComponent implements OnInit {
  titleEdit:string;
  submitButton:string;
  constructor() {
    this.titleEdit="ویرایش عنوان سایت";
    this.submitButton = "اعمال تغییرات"
   }

  ngOnInit() {
  }

}
