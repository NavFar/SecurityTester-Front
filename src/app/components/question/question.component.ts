import { Component, Input, OnInit } from '@angular/core';

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
  constructor() {
      this.flag=false;
   }

  ngOnInit() {
  }
  toggle(){
    this.flag= !this.flag;
  }

}
