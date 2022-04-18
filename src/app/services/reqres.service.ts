import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Reqres, ReqresData } from '../models/reqres';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  // https://reqres.in/api/users?page=2
  baseUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  getRequest(page: number): Observable<Reqres> {
    return this.http.get<Reqres>(`${this.baseUrl}users?page=${page}`);
  }

  getUserData(userNumber: string): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}users/${userNumber}`)
      .pipe(map((data) => data.data));
  }
}
