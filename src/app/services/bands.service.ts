import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BandModel } from '../models/band.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private url = 'https://crud-artist-app.firebaseio.com'

  constructor(private http: HttpClient) { }

  createBand( band: BandModel){

    return this.http.post(`${this.url}/bands.json`, band) 
          .pipe(
            map((resp:any) => {
              band.id = resp.name;
              return band;
            })
          );
  }
}
