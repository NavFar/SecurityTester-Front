import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient){}
  sendTestRequest(data):Observable<any>
  {
    return this.http.post<any>("/api/App/test/new",data);
  }
}
