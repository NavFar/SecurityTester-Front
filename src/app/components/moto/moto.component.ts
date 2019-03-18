import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {
  moto:string;

  constructor(private pageContentService : PageContentService) {
    this.moto="";
   }

  ngOnInit() {
    this.pageContentService.getSiteData().subscribe(
      (res) =>{
        this.moto = res.moto;
      },
      (err) =>{
        console.log("cant get values sorry");
      }
    );
  }

}
