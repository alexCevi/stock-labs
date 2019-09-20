import { Component, OnInit } from '@angular/core';
import { HttpUtilitiesService } from '../services/_httpUtil/http-utilities.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-intradaychart',
  templateUrl: './intradaychart.component.html',
  styleUrls: ['./intradaychart.component.scss']
})
export class IntradaychartComponent implements OnInit {

  chartDates = [];
  firstStockData = [];
  secondStockData = [];
  chartHasLoaded = false;
  dataType: string;
  stockOneSymbol: string;
  stockOnePrice: string;
  stockTwoSymbol: string;
  stockTwoPrice: string;
  stockOneVolume: string;
  stockTwoVolume: string;

  chartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          maxTicksLimit: 50
        }
      }]
    }
  };

  chartData = [
    { data: this.firstStockData, label: 'Account A', fill: false },
    { data: this.secondStockData, label: 'Account B', fill: false }
  ];

  chartLabels = this.chartDates;

  onChartClick(event) {
    console.log(event);
  }

  constructor(private http: HttpUtilitiesService) { }

  ngOnInit() {
    let dataType = '4. close';

    this.http.getStockOneData('MU')
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
          this.firstStockData.push(entries[i][1][dataType]);
          this.chartDates.push(entries[i][0]);
        }
        this.stockOnePrice = this.firstStockData[0];
        this.firstStockData.reverse();
        this.chartDates.reverse();

        this.stockOneSymbol = res[0]['2. Symbol'];

        this.stockOneVolume = entries[0][1]['5. volume'];


      });

    this.http.getStockTwoData('CSCO')
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
          this.secondStockData.push(entries[i][1][dataType]);
        }
        this.stockTwoPrice = this.secondStockData[0];
        this.secondStockData.reverse();
        this.stockTwoSymbol = res[0]['2. Symbol'];
        this.stockTwoVolume = entries[0][1]['5. volume'];
      });
  }
}
