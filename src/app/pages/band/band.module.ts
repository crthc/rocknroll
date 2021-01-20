import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BandRoutingModule } from './band-routing.module';
import { BandComponent } from './band.component';


@NgModule({
  declarations: [BandComponent],
  imports: [
    CommonModule,
    BandRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BandModule { }
