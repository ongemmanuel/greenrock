import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToTitleSeperatedCase'
})
export class CamelCaseToTitleSeperatedCasePipe implements PipeTransform {
  transform(value: any): string {
    if (typeof(value) === 'string')
      return value.replace(/([A-Z])/g, " $1").toString();
    else
      return value;
  }
}
