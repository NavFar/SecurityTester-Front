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
}
