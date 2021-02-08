import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseDashedName'
})
export class TitleCaseDashedNamePipe implements PipeTransform {
  constructor(private titleCasePipe: TitleCasePipe) {}

  transform(value: string, separator = '-'): string {
    return value.split(separator).map(val => this.titleCasePipe.transform(val)).join(' ');
  }
}
