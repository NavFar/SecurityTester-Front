import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  links:any[];
  constructor() {
    this.links=[
      {link:'firstPageDashboard',name:'صفحه نخست'},
      {link:'reportsDashboard',name:'صفحه گزارش ارزیابی'},
      {link:'uploader',name:'آپلودر'},
      {link:'siteOptionsDashboard',name:'تنظیمات سایت'},
    ];
   }
  ngOnInit() {
  }

}
