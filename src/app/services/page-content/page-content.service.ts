import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  cachedPageContent:any;
  hasLoadedPageContent:boolean;
  pageContentObservable:Observable<any>;

  cachedSiteData:any;
  hasLoadedSiteData:boolean;
  siteDataObservable:Observable<any>;

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
      });
    }
    else if(this.pageContentObservable)
      {
        return this.pageContentObservable;
      }
    else
    {
      this.pageContentObservable= this.http.post<any>("/api/App/pageContent/",null).pipe(
        catchError((e)=>{
          this.pageContentObservable=null;
          this.hasLoadedPageContent = false;
          return throwError(e);
        }),
        tap((h)=>{
          this.pageContentObservable=null;
          this.hasLoadedPageContent = true;
          this.cachedPageContent=h;
        }),share()
      );
      return this.pageContentObservable;
    }
  }
  getSiteData():Observable<any>{

    if(this.hasLoadedSiteData)
    {
      return new Observable((observer)=>{
        const {next, error} = observer;
        observer.next(this.cachedSiteData);
      });
    }
    else if(this.siteDataObservable)
    {
      return this.siteDataObservable;
    }
    else
    {
      this.siteDataObservable= this.http.post<any>("/api/App/siteData/",null).pipe(
        catchError((e)=>{
          this.siteDataObservable=null;
          this.hasLoadedSiteData = false;
          return throwError(e);
        }),
        tap((h)=>{
          this.siteDataObservable=null;
          this.hasLoadedSiteData = true;
          this.cachedSiteData=h;
        }),share()
      );
      return this.siteDataObservable;
    }
  }

}
