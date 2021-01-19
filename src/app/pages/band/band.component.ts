import { Component, OnInit } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';
import { NgForm } from '@angular/forms';
import { BandsService } from 'src/app/services/bands.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  band = new BandModel();

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
  }
  
  save(form:NgForm){

    if(form.invalid){
      console.log('Form not valid');
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let request: Observable<any>;

    if(this.band.id){
      request = this.bandsService.updateBand(this.band);
    }else{
      request = this.bandsService.createBand(this.band);
    }

    request.subscribe(resp => {

      Swal.fire({
        title: this.band.name,
        text: 'Succesfully updated',
        icon: 'success'
      });
    })


  }

}
