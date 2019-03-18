import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  siteTitle :string;
  links:any[];
  constructor(private pageContentService : PageContentService) {
    this.siteTitle = "عنوان سایت";
    this.links=[
      {name:"",link:"home"},
      {name:"",link:"faq"},
      {name:"",link:"#"},
      {name:"",link:"aboutUs"},
      {name:"",link:"contactus"},
    ];
   }
   ngOnInit() {
     this.pageContentService.getPageContent().subscribe(
       (res) =>{
         this.links[0].name=res.homePage;
         this.links[1].name=res.faq;
         this.links[2].name=res.recent;
         this.links[3].name=res.aboutUs;
         this.links[4].name=res.contactUs;
       },
       (err) =>{
         console.log("cant get values sorry");
       }
     );
     this.pageContentService.getSiteData().subscribe(
       (res) =>{
         this.siteTitle = res.title;
       },
       (err) =>{
         console.log("cant get values sorry");
       }
     );
   }

}
