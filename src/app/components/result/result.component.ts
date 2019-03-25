import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket/web-socket.service'
import { PageContentService } from '../../services/page-content/page-content.service'
import { ResultService } from '../../services/result/result.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnDestroy {
  result:string;
  testOverviewTitle:string;
  qualityLevel:string;
  hostLabel:string;
  testIdLabel:string;
  startTimeLabel:string;
  endTimeLabel:string;
  successfullTestsLabel:string;
  pending:string;
  finished:string;
  error:string;
  testScores:string;
  testTiltle:string;
  testStatus:string;
  score:string;
  partTitle:string;
  describtion:string;
  pass:string;
  fail:string;
  testResult;
  passedTests:number;
  testsScore:number;
  constructor(private resultService:ResultService,private activeRoute: ActivatedRoute,private websocket:WebSocketService,private pageContentService : PageContentService ) {
  }

  ngOnInit() {
    this.passedTests=0;
    this.testsScore=0;
    this.pageContentService.getPageContent().subscribe(
      (res) =>{
        this.testOverviewTitle=res.testOverviewTitle;
        this.qualityLevel =res.qualityLevel;
        this.hostLabel =res.hostLabel;
        this.testIdLabel =res.testIdLabel;
        this.startTimeLabel =res.startTimeLabel;
        this.endTimeLabel =res.endTimeLabel;
        this.successfullTestsLabel =res.successfullTestsLabel;
        this.testScores = res.testScores;
        this.testTiltle=res.testTiltle;
        this.testStatus=res.testStatus;
        this.score=res.score;
        this.describtion=res.describtion;
        this.pending=res.pending;
        this.finished=res.finished;
        this.error=res.error;
        this.pass=res.pass;
        this.fail=res.fail;
        this.partTitle=res.partTitle;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.resultService.getResult({id:id}).subscribe(
      (res)=>{
        this.testResult = res;
        this.updateScores();

      },
      (err)=>{
        console.log("cant get values sorry");
      }
    );
    this.websocket.serverSocket(id).subscribe(
      (sres)=>{
        this.testResult =sres;
        this.updateScores();
      },
      (serr)=>{
        console.log("cant get values sorry");
      }
    );
  }
  ngOnDestroy(){
    this.websocket.closeUserSocket();
  }
  updateScores(){
    let countedTests=0;
    let sum=0;
    this.passedTests=0;
    for(let i=0;i<this.testResult.pendingOn.length;i++){
      if(this.testResult.pendingOn[i].status==1){
      if(this.testResult.pendingOn[i].score)
        {
        countedTests++;
        sum+=Number(this.testResult.pendingOn[i].score);
        }
      if(this.testResult.pendingOn[i].pass)
        {
        this.passedTests++;
        }
      }
    }
    if(countedTests==0)
      this.testsScore=0;
    else
      this.testsScore=sum/countedTests;
  }
}
