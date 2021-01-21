import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandModel } from 'src/app/models/band.model';
import { Video } from 'src/app/models/youtube.models';
import { BandsService } from 'src/app/services/bands.service';
import { YoutubeService } from 'src/app/services/youtube.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  band = new BandModel();

  name: string;
  videos: Video[] = []

  vid: any[] = []
  vidId: string;

  constructor(private bandsService: BandsService, private route: ActivatedRoute, private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'new'){
      this.bandsService.getBand(id)
        .subscribe( (resp: BandModel) => {
          this.band = resp;
          this.youtubeService.q  = resp.name.toLocaleLowerCase();
          this.youtubeService.getVideos()
            .subscribe(resp => {
              this.videos.push(...resp);
            });    
          this.band.id = id;
        })
    }  
  }

  showVideo(video: object) {
    this.vid.push(video);
    this.vidId = this.vid[0].videoId;
    Swal.fire({
      html: `
        <hr>
        <iframe width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/${this.vidId}" frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      `
    })
  }
}


  

  

 

