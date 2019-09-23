import { Component } from '@angular/core';
import { StockOneService } from '../services/_stockData/stock-one.service';
import { StockTwoService } from '../services/_stockData/stock-two.service';

@Component({
  selector: 'app-stockinput',
  templateUrl: './stockinput.component.html',
  styleUrls: ['./stockinput.component.scss']
})
export class StockinputComponent {

  constructor(private stockOne: StockOneService, private stockTwo: StockTwoService) { }

  sendStockData(stockOneSymbol: string, stockTwoSymbol: string) {
    this.stockOne.getData(stockOneSymbol);
    this.stockTwo.getData(stockTwoSymbol);
  }

}
