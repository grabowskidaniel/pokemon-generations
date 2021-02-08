import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generationName'
})
export class GenerationNamePipe implements PipeTransform {
  constructor(private titleCasePipe: TitleCasePipe, private upperCasePipe: UpperCasePipe) {}

  /**
   * Converts a name with two words: the first word is converted to TitleCase, the second to UPPERCASE.
   * Example: "generation iv" to "Generation IV"
   */
  transform(value: string, separator = ' '): string {
    const splitted = value.split(separator);
    if (splitted.length === 2) {
      return `${this.titleCasePipe.transform(splitted[0])} ${this.upperCasePipe.transform(splitted[1])}`;
    }

    return value;
  }
}
