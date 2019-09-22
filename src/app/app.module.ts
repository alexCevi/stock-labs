import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockviewComponent } from './stockview/stockview.component';
import { IntradaychartComponent } from './intradaychart/intradaychart.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { StockinputComponent } from './stockinput/stockinput.component';



@NgModule({
  declarations: [
    AppComponent,
    StockviewComponent,
    IntradaychartComponent,
    NavComponent,
    HomeviewComponent,
    StockinputComponent
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
