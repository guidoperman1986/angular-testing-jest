import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Holliday } from '../../models/stock.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  baseUrl = 'https://api.polygon.io';
  apiKey = 'VKGgpPwpgRW41tTpvLlpcfpUmnRzh8rR';

  constructor(private http: HttpClient) {}

  getTickerInfo(ticker: string) {
    return this.http.get(
      `${this.baseUrl}/v3/reference/tickers?ticker=${ticker}&active=true&sort=ticker&order=asc&limit=10&apiKey=${this.apiKey}`
    );
  }

  public getMarketHolliday(): Observable<Holliday[]> {
    return this.http
      .get<Holliday[]>(
        `${this.baseUrl}/v1/marketstatus/upcoming?apiKey=${this.apiKey}`
      )
      .pipe(
        map((hollidays) => hollidays.filter((h) => (h.id = Math.random()))),
        tap((h) => console.log(h))
      );
  }

  getTickerNews(ticker: string) {
    return this.http.get(
      `${this.baseUrl}/v2/reference/news?ticker=${ticker}&apiKey=${this.apiKey}`
    );
  }
}
