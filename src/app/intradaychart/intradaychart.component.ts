import { Component, OnInit } from '@angular/core';
import { StockOneService } from '../services/_stockData/stock-one.service';
import { StockTwoService } from '../services/_stockData/stock-two.service';


@Component({
  selector: 'app-intradaychart',
  templateUrl: './intradaychart.component.html',
  styleUrls: ['./intradaychart.component.scss']
})
export class IntradaychartComponent implements OnInit {

  overview = '(demo)';

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
    { data: this.stockOne.data, label: 'Stock One', fill: false },
    { data: this.stockTwo.data, label: 'Stock Two', fill: false }
  ];

  chartLabels = this.stockOne.dates;

  onChartClick(event) {
    console.log(this.stockOne.data);
    console.log(this.stockTwo.data);
  }

  constructor(private stockOne: StockOneService, private stockTwo: StockTwoService) { }

  ngOnInit() {
    this.stockOne.getDemo();
    this.stockTwo.getDemo();
  }
}
