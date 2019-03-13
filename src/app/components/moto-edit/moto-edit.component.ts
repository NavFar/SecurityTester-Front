import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto-edit',
  templateUrl: './moto-edit.component.html',
  styleUrls: ['./moto-edit.component.css']
})
export class MotoEditComponent implements OnInit {

  motoEdit:string;
  submitButton:string;
  notShowMoto:string;
  constructor() {
    this.motoEdit="ویرایش شعار سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowMoto="عدم نمایش شعار سایت";
   }
  ngOnInit() {
  }

}
