import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLow'
})
export class GetLowPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
