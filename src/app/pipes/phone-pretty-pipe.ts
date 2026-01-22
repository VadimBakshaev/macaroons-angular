import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePretty',
})
export class PhonePrettyPipe implements PipeTransform {

  transform(value: number): string {
    const strValue: string = value.toString();
    return `+${strValue.slice(0, 3)} (${strValue.slice(3, 5)}) ${strValue.slice(5, 8)}-${strValue.slice(8, 10)}-${strValue.slice(10, 12)}`;
  }

}
