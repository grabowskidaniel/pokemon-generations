import { Component, Input, OnInit } from '@angular/core';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { PokemonSpecies } from '../model/pokemon-species.model';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss']
})
export class SpeciesCardComponent implements OnInit {
  @Input() species: PokemonSpecies;

  public cardTitle: string;

  constructor(private titleCaseDashedNamePipe: TitleCaseDashedNamePipe) {}

  ngOnInit(): void {
    this.cardTitle = `#${this.species.id} ${this.titleCaseDashedNamePipe.transform(this.species.name)}`;
  }
}
