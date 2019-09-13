import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = environment.api;
    constructor(private http: HttpClient) { }

    public getRequest(path: string, params?: any) {
        return this.http.get(`${this.apiUrl}${path}`, { params: { ...params } });
    }

    public postRequest(path: string, params: any) {
        return this.http.post(`${this.apiUrl}${path}`, params);
    }

    public putRequest(path: string, params: any) {
      return this.http.put(`${this.apiUrl}${path}`, params);
   }
}
