import { Component, Input } from '@angular/core';
import { PokemonSpecies } from '../model/pokemon-species.model';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss']
})
export class SpeciesCardComponent {
  @Input() species: PokemonSpecies;
}
