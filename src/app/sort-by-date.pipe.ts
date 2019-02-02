import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value)
    let sorted = value.sort((a: any, b: any) => {
        let da = new Date(a.date.year, a.date.month, a.date.day);
        let db = new Date(b.date.year, b.date.month, b.date.day);
        console.log(da, db)
    });
    console.log(sorted)
    return sorted;
}


}
