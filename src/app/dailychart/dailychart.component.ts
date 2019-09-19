import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dailychart',
  templateUrl: './dailychart.component.html',
  styleUrls: ['./dailychart.component.scss']
})
export class DailychartComponent implements OnInit {
  chartDates = [];
  chartDataCustom = [];
  chartHasLoaded = false;
  dataType: string;


  chartOptions = {
    responsive: true,

  };

  chartData = [
    { data: this.chartDataCustom, label: 'Account A', fill: false },

  ];

  chartLabels = this.chartDates;

  onChartClick(event) {
    console.log(event);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.
      get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=P20DES6V7R7AOXED')
      .pipe(map(responseData => {

        const newArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            newArray.push({ ...responseData[key] });
          }
        }
        return newArray;
      }))
      .subscribe(res => {
        // const keys = Object.keys(res[1]);
        // const value = Object.values(res[1]);
        const entries = Object.entries(res[1]);

        // console.log(keys);
        // console.log(value);
        // console.log(entries);

        for (let i = 0; i < entries.length; i++) {
          // console.log(entries[i][0] + ' ' + entries[i][1]['1. open'])

          this.dataType = '4. close';
          this.chartDataCustom.push(entries[i][1][this.dataType]);
          this.chartDates.push(entries[i][0]);



          // Data for date - bottom of chart entries[i][0]
          // Data for chart point on chart entries[i][1]['1. open'] - [1. open] will be different per data point .. maybe

        }
        this.chartDataCustom.reverse();
        this.chartDates.reverse();

      });
  }


}
