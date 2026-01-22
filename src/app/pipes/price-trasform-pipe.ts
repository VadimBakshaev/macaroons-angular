import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTrasform',
})
export class PriceTrasformPipe implements PipeTransform {

  transform(value: number): string {
    return (value).toFixed(2) + ' руб.';
  }

}
