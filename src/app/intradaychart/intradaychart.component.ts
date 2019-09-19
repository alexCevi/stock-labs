import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-intradaychart',
  templateUrl: './intradaychart.component.html',
  styleUrls: ['./intradaychart.component.scss']
})
export class IntradaychartComponent implements OnInit {

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
    this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=P20DES6V7R7AOXED')
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
        const entries = Object.entries(res[1]);

        for (let i = 0; i < entries.length; i++) {
          this.dataType = '4. close';
          this.chartDataCustom.push(entries[i][1][this.dataType]);
          this.chartDates.push(entries[i][0]);
        }
        this.chartDataCustom.reverse();
        this.chartDates.reverse();

      });
  }


}



