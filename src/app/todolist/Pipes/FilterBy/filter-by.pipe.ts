import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(arr: any[], key: string, prop: any): any[] {
    return arr.filter (item => item[key] === prop)
  }

}
