import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonGeneration } from '../model/pokemon-generation.model';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent implements OnInit {
  @Input() generation: PokemonGeneration;
  @Output() openRegion: EventEmitter<string> = new EventEmitter();
  @Output() openSpecies: EventEmitter<PokemonGeneration> = new EventEmitter();

  public mainRegion: string;
  public movesQuantity: string;
  public name: string;
  public speciesQuantity: string;
  public typesQuantity: string;
  public versionGroupsQuantity: string;

  ngOnInit(): void {
    // Initialize the information about a pokemon generation
    this.mainRegion = this.generation.main_region.name;
    this.movesQuantity = this.quantityFormater(this.generation.moves.length);
    this.speciesQuantity = this.quantityFormater(this.generation.pokemon_species.length);
    this.typesQuantity = this.quantityFormater(this.generation.types.length);
    this.versionGroupsQuantity = this.quantityFormater(this.generation.version_groups.length);

    const generationName = this.generation.names.find(name => name.language.name.toLowerCase() === 'en');
    this.name = generationName ? generationName.name : 'Unknown Generation';
  }

  /**
   * Converts a quantity to string.
   * Also returns the string 'None' when quantity = 0.
   * @param quantity type number
   */
  private quantityFormater(quantity: number): string {
    return quantity !== 0 ? `${quantity}` : 'None';
  }

  public onClickRegion(event: MouseEvent): void {
    this.openRegion.emit(this.generation.main_region.name);
  }

  public onClickSpecies(event: MouseEvent): void {
    this.openSpecies.emit(this.generation);
  }
}
