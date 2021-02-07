import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generationName'
})
export class GenerationNamePipe implements PipeTransform {
  /**
   * Recebe um nome no formato "generation-i" e retorna "Generation I"
   */
  transform(value: string): string {
    const splitted = value.split('-');
    if (splitted.length === 2) {
      return splitted.map((val, index) => {
        if (index === 0) {
          return val.charAt(0).toUpperCase() + val.slice(1);
        } else {
          return val.toUpperCase();
        }
      }).join(' ');
    } else {
      return value;
    }
  }
}
