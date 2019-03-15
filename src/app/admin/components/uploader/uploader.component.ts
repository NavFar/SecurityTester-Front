import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  uploaderTitle:string;
  selectFile:string;
  dragText:string;
  value:number;
  constructor() {
    this.uploaderTitle="اپلودر سایت";
    this.selectFile="انتخاب فایل";
    this.dragText="فایل را به اینجا بکشید تا اپلود شودیا"
    this.value=90;
  }
  ngOnInit() {
  }
  drop(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("hell");
    console.log(event.dataTransfer.files[0].name);
  }
  dragover(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("wow");
  }
  temp(){
    console.log("Hellow");
  }
}
