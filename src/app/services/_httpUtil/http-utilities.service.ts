import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpUtilitiesService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'https://www.alphavantage.co/query?function=';
  readonly key = 'P20DES6V7R7AOXED';

  getIntraDayStocks(symbol: string) {
    return this.http.get(this.apiUrl + 'TIME_SERIES_INTRADAY&' + symbol + '&interval=1min&apikey=' + this.key);
  }
}
