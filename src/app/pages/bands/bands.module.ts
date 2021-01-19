import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandsRoutingModule } from './bands-routing.module';
import { BandsComponent } from './bands.component';
import { HeaderComponent } from 'src/app/components/header/header.component';



@NgModule({
  declarations: [BandsComponent, HeaderComponent],
  imports: [
    CommonModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }
