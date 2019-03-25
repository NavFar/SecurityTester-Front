import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'
import { Router } from '@angular/router';
import { ResultService } from '../../services/result/result.service'

@Component({
  selector: 'app-recent-results',
  templateUrl: './recent-results.component.html',
  styleUrls: ['./recent-results.component.css']
})
export class RecentResultsComponent implements OnInit {
  recentResults:string;
  targetUrl:string;
  testDate:string;
  results;
  constructor(private router:Router,private pageContentService : PageContentService,private resultService:ResultService) { }

  ngOnInit() {
    this.pageContentService.getPageContent().subscribe(
      (res) =>{
        this.targetUrl=res.targetUrl;
        this.testDate=res.testDate;
        this.recentResults=res.recentResults;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    this.resultService.getRecentResults().subscribe(
      (res)=>{
        this.results = res;
      },
      (err)=>{
        console.log("cant get values sorry");
      }
    );
  }
  click(id){
    this.router.navigate(['/result',id]);
  }

}
