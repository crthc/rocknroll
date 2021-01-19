import { Component, OnInit, Input } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';

@Component({
  selector: 'app-band-header',
  templateUrl: './band-header.component.html',
  styleUrls: ['./band-header.component.scss']
})
export class BandHeaderComponent implements OnInit {

  @Input() band: string;

  constructor() { }

  ngOnInit(): void {
  }

}
