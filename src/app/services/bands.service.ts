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

  deleteBand( id: string){
    return this.http.delete(`${this.url}/bands/${id}.json`);
  }

  updateBand( band: BandModel ){

    const bandTemp = {
      ...band 
    };

    delete bandTemp.id;

    return this.http.put(`${this.url}/bands/${band.id}.json`, bandTemp);
  }

  getBand( id:string){
    return this.http.get(`${this.url}/bands/${id}.json`);
  }

  getBands(){
    return this.http.get(`${this.url}/bands.json`)
            .pipe(
              map ( this.createArray ),
              delay(1000)
            );
  }

  private createArray( bandObj: object){

    const bands: BandModel[] = [];

    if(bandObj === null){
      return [];
    }

    Object.keys(bandObj).forEach(key =>{
      const band: BandModel = bandObj[key];
      band.id = key;

      bands.push(band);
    })

    return bands;
  }


}