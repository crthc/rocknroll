import { SecurityContext } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BandModel } from 'src/app/models/band.model';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  band = new BandModel();

  constructor(private bandsService: BandsService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'new'){
      this.bandsService.getBand(id)
        .subscribe( (resp: BandModel) => {
          this.band = resp;
          this.band.id = id;
        })
    }

    
    
  }

 
}
