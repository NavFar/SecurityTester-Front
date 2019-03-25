import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { share } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  subject:any;
  constructor(){
    this.subject=null;
  }
  serverSocket(id){
    if(!this.subject){
      this.subject = webSocket("wss://"+window.location.href.split("/")[2]+"/api/App/result/progress?id="+id);
    }
    return this.subject;
  }
  getSocket(){
    return this.subject;
  }
  closeUserSocket() {
    // this.subject.disconnect();
    if(this.subject){
      this.subject.unsubscribe();
      this.subject.complete();
      this.subject=null;
    }
  }
}
