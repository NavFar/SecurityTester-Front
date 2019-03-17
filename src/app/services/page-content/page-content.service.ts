import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  cachedPageContent:any;
  hasLoaded:boolean;
  constructor(private http: HttpClient){
    this.hasLoaded=false;
  }
  getPageContent():Observable<any>{

    if(this.hasLoaded)
    {
      return new Observable((observer)=>{
        const {next, error} = observer;
        observer.next(this.cachedPageContent);
      }
      );
    }else
    {
      return this.http.post<any>("/api/App/pageContent/",null).pipe(
        tap((h)=>{
          this.hasLoaded = true;
          this.cachedPageContent=h;
        })
      );
    }
  }
}
