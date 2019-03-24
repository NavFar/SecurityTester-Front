import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient){}
  getResult(data):Observable<any>{
      return this.http.post<any>("/api/App/result/",data);
  }
}
