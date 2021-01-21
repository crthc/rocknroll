import { BandComponent } from './band/band.component';
import { BandsComponent } from './bands/bands.component';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { InfoComponent } from './info/info.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';





@NgModule({
  declarations: [
    PagesComponent, 
    HeaderComponent, 
    BandsComponent,
    BandComponent, 
    InfoComponent, 
    NopagefoundComponent, 
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
