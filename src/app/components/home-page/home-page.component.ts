import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageContentService } from '../../services/page-content/page-content.service'
import { ApiConnectionService } from '../../services/api-connection/api-connection.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ipInputPlaceHolder:string;
  introduction:string;
  exposeText:string;
  test:string;
  siteAdress:string;
  recaptcha:string;
  expose:boolean;
  noUrl:string;
  noCaptcha:string;
  badUrl:string;
  badCaptcha:string;
  constructor(private pageContentService : PageContentService,private apiConnection:ApiConnectionService,private router:Router,private toast :ToastrService) {
      this.ipInputPlaceHolder="";
      this.introduction="";
      this.exposeText="";
      this.test="";
      this.expose=false;
   }

  ngOnInit() {
    this.pageContentService.getPageContent().subscribe(
      (res) =>{
        this.ipInputPlaceHolder=res.ipInputPlaceHolder;
        this.test=res.test;
        this.exposeText=res.exposeText;
        this.noUrl=res.noUrl;
        this.noCaptcha=res.noCaptcha;
        this.badUrl=res.badUrl;
        this.badCaptcha=res.badCaptcha;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    this.pageContentService.getSiteData().subscribe(
      (res) =>{
        this.introduction = res.introduction;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
  }
  submit(){
    let flag = false;
    if(!this.siteAdress){
       this.toast.error(this.noUrl);
       flag=true;
    }
    if(!this.recaptcha){
       this.toast.error(this.noCaptcha);
       flag=true;
    }
    if(flag)
      return;
    this.apiConnection.sendTestRequest({
      address:this.siteAdress,
      recaptcha:this.recaptcha,
      expose:this.expose
    }).subscribe(
      (res)=>{
        return this.router.navigate(['/result',res]);
      },
      (err)=>{
        this.recaptcha="";
        if(err.status==400)
        return this.toast.error(this.badUrl);
        if(err.status==503)
        return this.toast.error(this.badCaptcha);
        return console.log("cant get values sorry");
      }
    );
  // this.WebSocket.connect("")
  }

}
