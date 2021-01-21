import { Component, OnInit } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';
import { BandsService } from 'src/app/services/bands.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  public bands: BandModel[] = [];
  searchValue: string;
  loading = false;

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.bandsService.getBands()
      .subscribe(resp => {
        this.bands = resp;
        this.loading = false;
      });
  }

  deleteBand( band: BandModel, i:number){

    Swal.fire({
      title: 'Are you sure?',
      text: `You are sure about deleting ${band.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp =>{

      if(resp.value){
        
        this.bands.splice(i, 1);
        this.bandsService.deleteBand(band.id).subscribe();
      }

    })
    
  }

}
