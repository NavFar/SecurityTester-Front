import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsFields:any[];
  contactUsText:string;
  notBotText:string;
  send:string;
  mapPosition:string;
  lat:number;
  lng:number;
  constructor(private pageContentService : PageContentService) {
    this.contactUsText=""
    this.mapPosition=""
    this.send="";
    this.contactUsFields=[
      {name:"name",placeholder:"",type:"text",req:true},
      {name:"email",placeholder:"",type:"text",req:true},
      {name:"phone",placeholder:"",type:"text",req:false},
      {name:"subject",placeholder:"",type:"text",req:true},
      {name:"text",placeholder:"",type:"textarea",req:true},
    ];
  }

  ngOnInit() {

    this.pageContentService.getPageContent().subscribe(
      (res) =>{
        this.send=res.send;
        this.contactUsFields[0].placeholder=res.name;
        this.contactUsFields[1].placeholder=res.email;
        this.contactUsFields[2].placeholder=res.phone;
        this.contactUsFields[3].placeholder=res.subject;
        this.contactUsFields[4].placeholder=res.text;
        this.mapPosition = res.mapPosition;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    this.pageContentService.getSiteData().subscribe(
      (res) =>{
        this.contactUsText = res.contactUs;
        this.lng = +res.lng;
        this.lat = +res.lat;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
  }

}
