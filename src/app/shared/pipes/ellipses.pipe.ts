import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipses'
})
export class EllipsesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    console.log(args[0]);
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
