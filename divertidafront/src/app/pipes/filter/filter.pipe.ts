import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string, selectedCategory: string): any[] {
    if (value == null || value == undefined || value.length == 0) {
      return [];
    }
    return value.filter((elemento: any) => {

      return elemento[selectedCategory].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  }
}
