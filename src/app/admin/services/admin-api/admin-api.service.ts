import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }
  getUsername(){
      return this.http.post<any>("/api/admin/username/",null);
  }
  getMoto(){
      return this.http.post<any>("/api/admin/siteData/getMoto/",null);
  }
  setMoto(moto){
      return this.http.post<any>("/api/admin/siteData/setMoto/",moto);
  }
  getIntroduction(){
      return this.http.post<any>("/api/admin/siteData/getIntroduction/",null);
  }
  setIntroduction(introduction){
      return this.http.post<any>("/api/admin/siteData/setIntroduction/",introduction);
  }
  getTitle(){
      return this.http.post<any>("/api/admin/siteData/getTitle/",null);
  }
  setTitle(title){
      return this.http.post<any>("/api/admin/siteData/setTitle/",title);
  }
  getLogo(){
      return this.http.post<any>("/api/admin/siteData/getLogo/",null);
  }
  setLogo(logo){
      return this.http.post<any>("/api/admin/siteData/setLogo/",logo);
  }
  getCopyright(){
      return this.http.post<any>("/api/admin/siteData/getCopyright/",null);
  }
  setCopyright(copyright){
      return this.http.post<any>("/api/admin/siteData/setCopyright/",copyright);
  }
  getFooter(){
      return this.http.post<any>("/api/admin/siteData/getFooter/",null);
  }
  setFooter(footer){
      return this.http.post<any>("/api/admin/siteData/setFooter/",footer);
  }
  getAboutUs(){
      return this.http.post<any>("/api/admin/siteData/getAboutUs/",null);
  }
  setAboutUs(aboutUs){
      return this.http.post<any>("/api/admin/siteData/setAboutUs/",aboutUs);
  }
}
