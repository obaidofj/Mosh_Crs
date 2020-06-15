import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null;

    let actLimit = limit ? limit : 50;
    return value.substr(0, actLimit) + '...';
  }
}
