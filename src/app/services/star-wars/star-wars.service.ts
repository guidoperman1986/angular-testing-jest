import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People, StarWarsResponse } from 'src/app/models/star-wars.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  search<T>(field: string, query: string): Observable<StarWarsResponse<T>> {
    console.log(query)
    const url = `${this.baseUrl}/${field}/?search=${query}`
    return this.http.get<StarWarsResponse<T>>(url);
  }
}


/* 
  https://swapi.dev/api/films/?search=luke

  https://swapi.dev/api/people/?search=r2

*/