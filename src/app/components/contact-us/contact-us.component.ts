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
  constructor(private pageContentService : PageContentService) {
    this.contactUsText=""
    this.mapPosition="موقعیت رو نقشه"
    this.send="";
    this.contactUsFields=[
      {name:"name",placeholder:"",type:"text"},
      {name:"email",placeholder:"",type:"text"},
      {name:"phone",placeholder:"",type:"text"},
      {name:"subject",placeholder:"",type:"text"},
      {name:"text",placeholder:"",type:"textarea"},
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
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
    this.pageContentService.getSiteData().subscribe(
      (res) =>{
        this.contactUsText = res.contactUs;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
  }

}
