import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'saToSeconds' })
export class SaToSecondsPipe implements PipeTransform {

  transform(value: number): number {
    // translate milliseconds to seconds
    return Math.round(value / 1000);
  }
}
