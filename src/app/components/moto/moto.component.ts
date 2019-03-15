import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {
  moto:string;

  constructor() {
    this.moto="شعار سایت";
   }

  ngOnInit() {
  }

}
