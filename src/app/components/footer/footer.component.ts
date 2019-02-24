import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footNote:string;
  copyRight:string;
  constructor() {
    this.footNote="متن زیرنویس"
    this.copyRight="متن کپی رایت"
   }

  ngOnInit() {
  }

}
