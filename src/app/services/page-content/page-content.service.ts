import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  cachedPageContent:any;
  hasLoadedPageContent:boolean;
  cachedSiteData:any;
  hasLoadedSiteData:boolean;
  constructor(private http: HttpClient){
    this.hasLoadedPageContent=false;
    this.hasLoadedSiteData=false;
  }
  getPageContent():Observable<any>{

    if(this.hasLoadedPageContent)
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
          this.hasLoadedPageContent = true;
          this.cachedPageContent=h;
        })
      );
    }
  }

  getSiteData():Observable<any>{

    if(this.hasLoadedSiteData)
    {
      return new Observable((observer)=>{
        const {next, error} = observer;
        observer.next(this.cachedSiteData);
      }
      );
    }else
    {
      return this.http.post<any>("/api/App/siteData/",null).pipe(
        tap((h)=>{
          this.hasLoadedSiteData = true;
          this.cachedSiteData=h;
        })
      );
    }
  }

}
