import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilitiesService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'https://www.alphavantage.co/query?function=';
  readonly apiKey = 'P20DES6V7R7AOXED';

  getStockOneData(symbol: string) {
    return this.http.get(this.apiUrl + 'TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&apikey=' + this.apiKey);
  }

  getStockTwoData(symbol: string) {
    return this.http.get(this.apiUrl + 'TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&apikey=' + this.apiKey);
  }

  getStockDemo() {
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo');
  }
}
