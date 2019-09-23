import { Injectable } from '@angular/core';
import { HttpUtilitiesService } from '../_httpUtil/http-utilities.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockTwoService {

  data = [];
  symbol: string;
  price: string;
  volume: string;

  constructor(private http: HttpUtilitiesService) { }
  getData(symbol: string) {
    this.http.getStockTwoData(symbol).pipe(map(responseData => {
      const newArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          newArray.push({ ...responseData[key] });
        }
      }
      return newArray;
    }))
      .subscribe(res => {
        const entries = Object.entries(res[1]);

        for (let i = 0; i < entries.length; i++) {
          this.data.push(entries[i][1]['4. close']);
        }
        this.price = this.data[0];
        this.data.reverse();
        this.symbol = res[0]['2. Symbol'];
        this.volume = entries[0][1]['5. volume'];
      });
  }
  getDemo() {
    this.http.getStockDemo().pipe(map(responseData => {
      const newArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          newArray.push({ ...responseData[key] });
        }
      }
      return newArray;
    }))
      .subscribe(res => {

        const entries = Object.entries(res[1]);

        for (let i = 0; i < entries.length; i++) {
          this.data.push(entries[i][1]['4. close']);
        }
        this.price = this.data[0];
        this.data.reverse();

        this.symbol = res[0]['2. Symbol'];

        this.volume = entries[0][1]['5. volume'];
      });
  }
}
