import { Component, Input, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()title:string;
  @Input()question:string;
  @Input()answer:string;
  flag:boolean;
  questionTitle:string;
  answerTitle:string;
  constructor(private pageContentService : PageContentService) {
      this.flag=false;
      this.questionTitle="";
      this.answerTitle="";
   }

   ngOnInit() {
     this.pageContentService.getPageContent().subscribe(
       (res) =>{
         this.questionTitle=res.questionTitle;
         this.answerTitle=res.answerTitle;
       },
       (err) =>{
         console.log("cant get values sorry");
       }
     );
   }
  toggle(){
    this.flag= !this.flag;
  }

}
