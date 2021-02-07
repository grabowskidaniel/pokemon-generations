import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonStateFacadeService } from 'src/app/services/pokemon-state-facade.service';
import { PokemonGeneration } from './model/pokemon-generation.model';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {
  public generations$: Observable<PokemonGeneration[]> = this.pokemonStateFacadeService.generations$;

  constructor(private pokemonStateFacadeService: PokemonStateFacadeService) {}

  ngOnInit(): void {
    this.pokemonStateFacadeService.loadPokemonGenerations();
  }
}
