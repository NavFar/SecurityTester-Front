import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() currentPage:number;
  @Input() range:number;
  @Input() max:number;
  // @Output() currentPageChange: EventEmitter<number>() = new EventEmitter();
  @Output() pageChanged:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  arrayOne(): any[] {
    let start = this.currentPage - Math.floor((this.range-1)/2);
    let end  =this.currentPage + this.range-1 - Math.floor((this.range-1)/2);
    if(start<1){
      end-=start-1;
      start=1
    }
    if(end>this.max)
    {
      start = Math.max(1,start+this.max-end)
      end = this.max;
    }
    let array=[]
    for(let i = start;i<=end;i++)
      array.push(i)
     return array;
   }
   pageChang(id){
     this.pageChanged.emit(id);
   }
}
