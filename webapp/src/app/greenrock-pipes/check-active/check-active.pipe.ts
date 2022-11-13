import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkActive'
})
export class CheckActivePipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'string' && value.toLowerCase() === 'active') {
      return 'active';
    } else if (typeof value === 'string' && value.toLowerCase() === 'inactive') {
      return 'inactive';
    } else {
      return value;
    }
  }

}
