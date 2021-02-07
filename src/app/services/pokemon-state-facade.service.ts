import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadPokemonGenerationsAction } from '../store/pokemon/pokemon.actions';
import { BasicGeneration, PokemonGenerationResult } from '../store/pokemon/pokemon.model';
import { PokemonState } from '../store/pokemon/pokemon.state';

@Injectable({providedIn: 'root'})
export class PokemonStateFacadeService {
  @Select(PokemonState.basicGenerations) basicGenerations$: Observable<BasicGeneration[]>;
  @Select(PokemonState.generationResult) generationResult$: Observable<PokemonGenerationResult>;

  constructor(private store: Store) { }

  /**
   * Loads the generations into the state
   */
  loadPokemonGenerations(): void {
    this.store.dispatch(new LoadPokemonGenerationsAction());
  }
}
