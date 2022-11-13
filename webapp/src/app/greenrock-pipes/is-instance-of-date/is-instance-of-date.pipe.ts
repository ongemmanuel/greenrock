import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isInstanceOfDate'
})
export class IsInstanceOfDatePipe implements PipeTransform {

  transform(value: any): boolean {
    if (value instanceof Date) {
;     return true
    } else {
      return false;
    }
  }

}
