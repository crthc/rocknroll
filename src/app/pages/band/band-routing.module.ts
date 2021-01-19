import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandComponent } from './band.component';

const routes: Routes = [
  {
    path:'', component: BandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule { }
