import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';
import { InfoComponent } from './info/info.component';

const childRoutes: Routes = [
  { path: '', component: BandsComponent },
  { 
    path: "bands", component: BandsComponent
  },
  { 
    path: "band/:id", component: BandComponent
  },
  { 
    path: "info/:id", component: InfoComponent
  },
  
]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
  
})
export class ChildRoutesModule { }
