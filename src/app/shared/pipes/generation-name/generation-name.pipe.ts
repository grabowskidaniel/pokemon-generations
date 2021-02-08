import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generationName'
})
export class GenerationNamePipe implements PipeTransform {
  constructor(private titleCasePipe: TitleCasePipe, private upperCasePipe: UpperCasePipe) {}

  /**
   * Recebe um nome no formato "generation iv" e retorna "Generation IV"
   */
  transform(value: string, separator = ' '): string {
    const splitted = value.split(separator);
    if (splitted.length === 2) {
      return `${this.titleCasePipe.transform(splitted[0])} ${this.upperCasePipe.transform(splitted[1])}`;
    }

    return value;
  }
}
