import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  links:any[];
  constructor() {
    this.links=[
      {link:'firstPageDashboard',name:'صفحه نخست'},
      {link:'',name:'صفحه گزارش ارزیابی'},
      {link:'',name:'آپلودر'},
      {link:'siteOptionsDashboard',name:'تنظیمات سایت'},
    ];
   }
  ngOnInit() {
  }

}
