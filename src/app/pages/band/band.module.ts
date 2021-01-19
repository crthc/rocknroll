import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandRoutingModule } from './band-routing.module';
import { BandComponent } from './band.component';
import { BandHeaderComponent } from 'src/app/components/band-header/band-header.component';


@NgModule({
  declarations: [BandComponent, BandHeaderComponent],
  imports: [
    CommonModule,
    BandRoutingModule
  ]
})
export class BandModule { }
