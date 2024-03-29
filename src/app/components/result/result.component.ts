import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket/web-socket.service'
import { PageContentService } from '../../services/page-content/page-content.service'
import { ResultService } from '../../services/result/result.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { faTimes,faCheck,faMinus,faInfoCircle,faDownload,faRedo,faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnDestroy {
  cross = faTimes;
  check = faCheck;
  dash = faMinus;
  info = faInfoCircle;
  redo = faRedo;
  download = faDownload;
  print = faPrint;
  result:string;
  testLabel:string;
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
  testDetails;
  passedTests:number;
  testsScore:number;
  notFound:string;
  from:string;
  tooWeak:string;
  weak:string;
  average:string;
  good:string;
  excellent:string;
  passStatus:string;
  recommendation:string;
  testAgain:string;
  printDescDoc:string;
  watchSecDoc:string;
  constructor(private toast:ToastrService,private resultService:ResultService,private router:Router,private activeRoute: ActivatedRoute,private websocket:WebSocketService,private pageContentService : PageContentService ) {
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
        this.notFound=res.notFound;
        this.from = res.from;
        this.tooWeak = res.tooWeak;
        this.weak = res.weak;
        this.average = res.average;
        this.good = res.good;
        this.excellent = res.excellent;
        this.passStatus = res.passStatus;
        this.recommendation=res.recommendation;
        this.testLabel=res.test;
        this.result = res.result;
        this.watchSecDoc= res.watchSecDoc;
        this.printDescDoc= res.printDescDoc;
        this.testAgain= res.testAgain;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    let id = this.activeRoute.snapshot.paramMap.get('id');

    this.resultService.getResult({id:id}).subscribe(
      (res)=>{
        this.testResult = res.request;
        this.testDetails = res.scripts;
        this.updateScores();
      },
      (err)=>{
        if(err.status==404)
        return console.log("cant get values sorry");
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
        // console.log(this.testResult.pendingOn[i].result.pass)
      if(this.testResult.pendingOn[i].result.pass)
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
  return(){
    this.router.navigate(['/home']);
  }
}
