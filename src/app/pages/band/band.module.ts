import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandRoutingModule } from './band-routing.module';
import { BandComponent } from './band.component';


@NgModule({
  declarations: [BandComponent],
  imports: [
    CommonModule,
    BandRoutingModule
  ]
})
export class BandModule { }
