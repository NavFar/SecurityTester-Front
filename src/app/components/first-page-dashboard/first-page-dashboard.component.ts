import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page-dashboard',
  templateUrl: './first-page-dashboard.component.html',
  styleUrls: ['./first-page-dashboard.component.css']
})
export class FirstPageDashboardComponent implements OnInit {
  links:any[];
  constructor() {
    this.links=[
      {name:"شعار سایت",link:"motoEdit"},
      {name:"متن معرفی سایت",link:""},
    ];
   }

  ngOnInit() {
  }

}
