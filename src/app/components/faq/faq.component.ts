import { Component , OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs:any[];
  constructor(private pageContentService : PageContentService) {
    this.faqs=[
      // {title:"شس",question:"سس",answer:"سس"},
    ];
   }

   ngOnInit(){
   this.pageContentService.getSiteData().subscribe(
     (res) =>{
       this.faqs = res.faqs;
     },
     (err) =>{
       console.log("cant get values sorry");
     }
   );
 }

}
