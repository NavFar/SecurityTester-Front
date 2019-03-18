import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footNote:string;
  copyright:string;
  constructor(private pageContentService : PageContentService) {
    this.footNote="";
    this.copyright="";
   }

  ngOnInit() {
    this.pageContentService.getSiteData().subscribe(
      (res) =>{
        this.footNote = res.footer;
        this.copyright = res.copyright;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
  }

}
