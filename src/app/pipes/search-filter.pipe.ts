import { Pipe, PipeTransform } from '@angular/core';
import { BandModel } from '../models/band.model';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(bands: BandModel[], searchValue: string): BandModel[] {
    
    if(!bands || !searchValue){
      return bands;
    }
    return bands.filter( band => 
      band.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
