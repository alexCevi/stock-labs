import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeviewComponent } from './homeview/homeview.component';

const routes: Routes = [
  { path: '', component: HomeviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
