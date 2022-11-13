import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatInstanceofDate'
})
export class FormatInstanceofDatePipe implements PipeTransform {

  transform(value: Date | any, setNumberDateFormat: boolean = false, setTime: boolean = false) {
    if (value instanceof Date) {

      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value);
      let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(value);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value);

      let date;
      if (setNumberDateFormat) {
        month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(value);
        date = `${month}/${day}/${year}`;
      } else {
        date = `${day} ${month}, ${year}`;
      }

      let time;
      if (setTime) {
        const newformat = value.getHours() >= 12 ? 'PM' : 'AM';
        const hours = value.getHours();
        const min = (value.getMinutes().toString().length === 1 ? '0' : '') + value.getMinutes()
        time = ` ${hours}:${min} ${newformat}`;
      } else {
        time = '';
      }

      return date + time;

    } else {
      return value;
    }
  }

}
