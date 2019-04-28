import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-options',
  templateUrl: './reports-options.component.html',
  styleUrls: ['./reports-options.component.css']
})
export class ReportsOptionsComponent implements OnInit {

  links:any[];
  constructor() {
    this.links=[
      {link:'',name:'ویرایش صفحه گزارش'},
      {link:'allResults',name:'مشاهده ارزیابی های انجام شده'},
    ];
   }

  ngOnInit() {
  }

}
