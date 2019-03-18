import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUs:string;
  constructor(private pageContentService : PageContentService) {
    this.aboutUs="";
   }
   ngOnInit(){
   this.pageContentService.getSiteData().subscribe(
     (res) =>{
       this.aboutUs = res.aboutUs;
     },
     (err) =>{
       console.log("cant get values sorry");
     }
   );
 }
}
