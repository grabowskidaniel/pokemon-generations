import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonGeneration } from '../modules/generations/model/pokemon-generation.model';
import { PokemonSpecies } from '../modules/species/model/pokemon-species.model';
import { LoadPokemonGenerationsAction, LoadPokemonSpeciesDetailsAction } from '../store/pokemon/pokemon.actions';
import { PokemonState } from '../store/pokemon/pokemon.state';

/**
 * Facade service used to access the state management Store.
 */
@Injectable({providedIn: 'root'})
export class PokemonStateFacadeService {
  @Select(PokemonState.generations) generations$: Observable<PokemonGeneration[]>;

  constructor(private store: Store) {}

  /**
   * Loads the generations into the state
   */
  loadPokemonGenerations(): void {
    this.store.dispatch(new LoadPokemonGenerationsAction());
  }

  /**
   * Loads the generations into the state
   */
  loadPokemonSpecies(): void {
    this.store.dispatch(new LoadPokemonGenerationsAction());
  }

  /**
   * Loads the species details into the state
   */
  loadSpeciesDetails(generationName: string): void {
    this.store.dispatch(new LoadPokemonSpeciesDetailsAction(generationName));
  }

  /**
   * Returns a list with the species from a generation
   * @param generationName name of the generation
   */
  generationSpecies$(generationName: string): Observable<PokemonSpecies[]> {
    return this.store.select(PokemonState.generationSpecies).pipe(map(filter => filter(generationName)));
  }
}
