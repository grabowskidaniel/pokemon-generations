import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonStateFacadeService } from 'src/app/services/pokemon-state-facade.service';
import { BasicGeneration } from 'src/app/store/pokemon/pokemon.model';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {
  public basicGenerations$: Observable<BasicGeneration[]> = this.pokemonStateFacadeService.basicGenerations$;

  constructor(private pokemonStateFacadeService: PokemonStateFacadeService) {}

  ngOnInit(): void {
    this.pokemonStateFacadeService.loadPokemonGenerations();
  }
}
