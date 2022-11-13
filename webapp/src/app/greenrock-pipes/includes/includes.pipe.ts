import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {

  transform(items: any, element: any): boolean {
    if (items.length > 0 && element) {
      return items.includes(element);
    } else {
      return false;
    }

  }

}
