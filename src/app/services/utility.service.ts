import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movies, Result } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  baseUrl = 'https://api.themoviedb.org/3';
  constructor(private httpClient: HttpClient) {}

  public validateAccount(validateAccount: any): Observable<any> {
    return this.httpClient.post('this.apis.verifyAccount', validateAccount);
  }

  /* para mat-autocomplete input */
  get params() {
    return {
      api_key: '0441c4db2a92748936c3e9dddc8a3b2c',
      language: 'en',
      page: 1,
    };
  }

  searchMovie(movie: string): Observable<Result[]> {
    const params = {
      ...this.params,
      page: '1',
      query: movie,
      include_adult: 'false',
    };

    return this.httpClient
      .get<Movies>(`${this.baseUrl}/search/movie`, { params })
      .pipe(map((movies) => movies.results));
  }

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.httpClient.get(path);
  }
}
