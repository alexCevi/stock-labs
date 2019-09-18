import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockviewComponent } from './stockview/stockview.component';
import { IntradaychartComponent } from './intradaychart/intradaychart.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryboxcontainerComponent } from './summaryboxcontainer/summaryboxcontainer.component';
import { DailychartComponent } from './dailychart/dailychart.component';
import { WeeklychartComponent } from './weeklychart/weeklychart.component';
import { MonthlychartComponent } from './monthlychart/monthlychart.component';


@NgModule({
  declarations: [
    AppComponent,
    StockviewComponent,
    IntradaychartComponent,
    SummaryboxcontainerComponent,
    DailychartComponent,
    WeeklychartComponent,
    MonthlychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
