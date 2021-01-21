import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import {map} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyAv4W5i1Bkvkx4gMFgFyazVPhMIweGafBU';
  public q: string;
 

  constructor( private http: HttpClient) {}

  getVideos(){

    const url = `${this.youtubeUrl}`

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '1')
      .set('key', this.apiKey)
      .set('q', this.q.trim())

    return this.http.get<YoutubeResponse>(url, {params})
              .pipe(
                map(resp => {
                  return resp.items;
                }),
                map(items => items.map(video => video.id))
              )
  }

}
