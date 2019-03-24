import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket/web-socket.service'
import { ResultService } from '../../services/result/result.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnDestroy {
  result:string;
  constructor(private resultService:ResultService,private activeRoute: ActivatedRoute,private websocket:WebSocketService) {
    console.log("constructor");
  }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.resultService.getResult({id:id}).subscribe(
      (res)=>{
        this.result = res;
        this.websocket.serverSocket(id).subscribe(
          (sres)=>{
            console.log(sres)
            this.result =sres.results;
          },
          (serr)=>{
            console.log(serr);
          }
        );
      },
      (err)=>{

      }
    );
    console.log(id)
  }
  ngOnDestroy(){
    console.log("destroyed");
    // this.websocket.getSocket().unsubscribe();
    this.websocket.closeUserSocket();
  }
}
