import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BandsRoutingModule } from './bands-routing.module';
import { BandsComponent } from './bands.component';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';



@NgModule({
  declarations: [BandsComponent, SearchFilterPipe],
  imports: [
    CommonModule,
    BandsRoutingModule,
    FormsModule,
  
    HttpClientModule
  ]
})
export class BandsModule { }
