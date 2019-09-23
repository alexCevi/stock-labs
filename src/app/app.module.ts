import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockviewComponent } from './stockview/stockview.component';
import { IntradaychartComponent } from './intradaychart/intradaychart.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { StockinputComponent } from './stockinput/stockinput.component';
import { HomedemoComponent } from './homedemo/homedemo.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';





@NgModule({
  declarations: [
    AppComponent,
    StockviewComponent,
    IntradaychartComponent,
    NavComponent,
    HomeviewComponent,
    StockinputComponent,
    HomedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
