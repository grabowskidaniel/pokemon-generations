import { Component, Input, OnInit } from '@angular/core';
import { PokemonGeneration } from 'src/app/store/pokemon/pokemon.model';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent implements OnInit {
  @Input() generation: PokemonGeneration;

  public mainRegion: string;
  public movesQuantity: number;
  public name: string;
  public speciesQuantity: number;
  public typesQuantity: number;
  public versionGroupsQuantity: number;

  ngOnInit(): void {
    this.mainRegion = this.generation.main_region.name;
    this.movesQuantity = this.generation.moves.length;
    this.speciesQuantity = this.generation.pokemon_species.length;
    this.typesQuantity = this.generation.types.length;
    this.versionGroupsQuantity = this.generation.version_groups.length;

    const generationName = this.generation.names.find(name => name.language.name.toLowerCase() === 'en');
    this.name = generationName ? generationName.name : 'Unknown Generation';
  }
}
