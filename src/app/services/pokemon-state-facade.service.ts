import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PokemonGeneration } from '../modules/generations/model/pokemon-generation.model';
import { LoadPokemonGenerationsAction } from '../store/pokemon/pokemon.actions';
import { PokemonState } from '../store/pokemon/pokemon.state';

@Injectable({providedIn: 'root'})
export class PokemonStateFacadeService {
  @Select(PokemonState.generations) generations$: Observable<PokemonGeneration[]>;

  constructor(private store: Store) { }

  /**
   * Loads the generations into the state
   */
  loadPokemonGenerations(): void {
    this.store.dispatch(new LoadPokemonGenerationsAction());
  }
}
