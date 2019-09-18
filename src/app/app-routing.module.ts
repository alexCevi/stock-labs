import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockviewComponent } from './stockview/stockview.component';

const routes: Routes = [
  { path: 'stock', component: StockviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
