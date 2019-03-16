import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  constructor(private http: HttpClient,private messageService: MessageService){}
  pageContent():Observable<any>{
    return this.http.post<any>("/api/pageContent/").pipe(

    );
  }
}
