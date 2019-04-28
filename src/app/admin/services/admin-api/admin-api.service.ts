import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { tap,map,last,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }
  deleteFaq(id){
    return this.http.post<any>("/api/admin/siteData/deleteFaq/",id);
  }
  getFaq(id){
    return this.http.post<any>("/api/admin/siteData/getFaq/",id);
  }
  addFaq(faq){
    return this.http.post<any>("/api/admin/siteData/addFaq/",faq);
  }
  getAllFaqs(){
    return this.http.post<any>("/api/admin/siteData/getAllFaqs",null);
  }
  getResultsCount(){
    return this.http.post<any>("/api/admin/result/count",null);
  }
  getAllResults(offset,limit){
    return this.http.post<any>("/api/admin/result/all",{offset:offset,limit:limit});
  }
  getUsername(){
      return this.http.post<any>("/api/admin/user/username/",null);
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
  getContactUs(){
      return this.http.post<any>("/api/admin/siteData/getContactUs/",null);
  }
  setContactUs(contactUs){
      return this.http.post<any>("/api/admin/siteData/setContactUs/",contactUs);
  }
  getDirectoryContent(){
      return this.http.post<any>("/api/admin/uploader/getDirectoryContent/",null);
  }
  uploadFile(file){
    const req = new HttpRequest('POST', "/api/admin/uploader/upload/", file, {
    reportProgress: true
  });
    return this.http.request(req).pipe(
      catchError((err)=>{
        return throwError(err);
      })
    );
  }
}
