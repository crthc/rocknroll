import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BandRoutingModule } from './band-routing.module';
import { BandComponent } from './band.component';
import { BandHeaderComponent } from 'src/app/components/band-header/band-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BandComponent, BandHeaderComponent],
  imports: [
    CommonModule,
    BandRoutingModule,
    FormsModule,
    HttpClientModule
   
  ]
})
export class BandModule { }
