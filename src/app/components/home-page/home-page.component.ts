import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'
import { ApiConnectionService } from '../../services/api-connection/api-connection.service'

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
  constructor(private pageContentService : PageContentService,private apiConnection:ApiConnectionService) {
      this.ipInputPlaceHolder="";
      this.introduction="";
      this.exposeText="";
      this.test="";
   }

  ngOnInit() {
    this.pageContentService.getPageContent().subscribe(
      (res) =>{
        this.ipInputPlaceHolder=res.ipInputPlaceHolder;
        this.test=res.test;
        this.exposeText=res.exposeText;
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
    this.apiConnection.sendTestRequest({
      address:this.siteAdress,
      recaptcha:this.recaptcha,
      expose:this.expose
    }).subscribe(
      (res)=>{},
      (err)=>{}
    );
  }

}
