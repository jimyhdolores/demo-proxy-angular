import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  getGreeting(): Observable<any> {
    // return this.http.get<any>('http://localhost:8080/apidemo/greeting');
    return this.http.get<any>('apidemo/greeting');

  }

}
