import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonGeneration, PokemonGenerationResult } from 'src/app/modules/generations/model/pokemon-generation.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { LoadPokemonGenerationAction, LoadPokemonGenerationsAction } from './pokemon.actions';
import { PokemonStateModel } from './pokemon.model';

const POKEMON_TOKEN: StateToken<PokemonStateModel> = new StateToken('Pokemon');

export const initialGenerationResult: PokemonGenerationResult = {
  count: 0,
  next: '',
  previous: '',
  results: []
};

@State<PokemonStateModel>({
  name: POKEMON_TOKEN,
  defaults: {
    generations: [],
    generationResult: initialGenerationResult
  },
})
@Injectable()
export class PokemonState {
  constructor(private pokemonService: PokemonService) {}

  @Selector()
  public static generations(state: PokemonStateModel): PokemonGeneration[] {
    return state.generations;
  }

  /**
   * Retrieves the pokemon generations from the API into the state, if the information isn't already loaded.
   * Dispatch the LoadPokemonGenerationAction to load more information about the generation
   */
  @Action(LoadPokemonGenerationsAction)
  public loadPokemonGenerations(context: StateContext<PokemonStateModel>): Observable<Observable<void>> {
    const alreadyLoaded: boolean = context.getState().generations.length > 0;
    // if already loaded: do nothing
    if (alreadyLoaded) {
      return EMPTY;
    } else {
      // load generations
      return this.pokemonService.generations().pipe(map((generationResult: PokemonGenerationResult) => {
        // update the state
        context.setState({ generationResult, generations: [] });
        return context.dispatch(new LoadPokemonGenerationAction());
      }));
    }
  }

  /**
   * Retrieve more information about the generation by doing one request for each generation URL
   */
  @Action(LoadPokemonGenerationAction)
  public loadPokemonGeneration(context: StateContext<PokemonStateModel>): Observable<PokemonStateModel> {
    const urls = context.getState().generationResult.results.map(result => this.pokemonService.generation(result.url));
    return forkJoin(urls).pipe(map(generations => context.patchState({ generations })));
  }
}
