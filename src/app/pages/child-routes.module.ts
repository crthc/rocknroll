import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';
import { InfoComponent } from './info/info.component';

const childRoutes: Routes = [
  { path: '', 
    component: BandsComponent,
    data: {
      title: 'Bands',
      description: '70s Rock and Roll Bands ',
      ogTitle: 'List of best rock and roll bands from the 70s',
    } 
},
  { 
    path: "bands", 
    component: BandsComponent,
    data: {
      title: 'Bands',
      description: '70s Rock and Roll Bands ',
      ogTitle: 'List of best rock and roll bands from the 70s',
    } 
  },
  { 
    path: "band/:id", 
    component: BandComponent,
    data: {
      title: 'Band',
      description: 'Template data of a 70s band to update and save',
      ogTitle: 'Template data with input fields of band details',
    } 
  },
  { 
    path: "info/:id", 
    component: InfoComponent,
    data: {
      title: 'Band',
      description: 'Detail information of a 70s band to view and listen',
      ogTitle: 'Get the info and play your songs',
    } 
  },
  
]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
  
})
export class ChildRoutesModule { }
