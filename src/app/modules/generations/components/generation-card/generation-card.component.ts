import { Component, Input } from '@angular/core';
import { PokemonGeneration } from 'src/app/store/pokemon/pokemon.model';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent {
  @Input() generation: PokemonGeneration;
}
