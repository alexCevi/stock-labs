import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockviewComponent } from './stockview/stockview.component';
import { HomeviewComponent } from './homeview/homeview.component';

const routes: Routes = [
  { path: 'stock', component: StockviewComponent },
  { path: '', component: HomeviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
