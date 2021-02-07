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
  public movesQuantity: string;
  public name: string;
  public speciesQuantity: string;
  public typesQuantity: string;
  public versionGroupsQuantity: string;

  ngOnInit(): void {
    this.mainRegion = this.generation.main_region.name;
    this.movesQuantity = this.quantityFormater(this.generation.moves.length);
    this.speciesQuantity = this.quantityFormater(this.generation.pokemon_species.length);
    this.typesQuantity = this.quantityFormater(this.generation.types.length);
    this.versionGroupsQuantity = this.quantityFormater(this.generation.version_groups.length);

    const generationName = this.generation.names.find(name => name.language.name.toLowerCase() === 'en');
    this.name = generationName ? generationName.name : 'Unknown Generation';
  }

  private quantityFormater(quantity: number): string {
    return quantity !== 0 ? `${quantity}` : 'None';
  }
}
