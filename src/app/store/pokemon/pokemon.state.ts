import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { LoadPokemonGenerationAction, LoadPokemonGenerationsAction } from './pokemon.actions';
import { PokemonGeneration, PokemonGenerationResult, PokemonStateModel } from './pokemon.model';

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

  @Action(LoadPokemonGenerationsAction)
  public loadPokemonGenerations(context: StateContext<PokemonStateModel>): Observable<Observable<void>> {
    return this.pokemonService.generations().pipe(map((generationResult: PokemonGenerationResult) => {
      context.setState({ generationResult, generations: [] });
      return context.dispatch(new LoadPokemonGenerationAction());
    }));
  }

  @Action(LoadPokemonGenerationAction)
  public loadPokemonGeneration(context: StateContext<PokemonStateModel>): Observable<PokemonStateModel> {
    const urls = context.getState().generationResult.results.map(result => this.pokemonService.generation(result.url));
    return forkJoin(urls).pipe(map(generations => {
      return context.patchState({ generations });
    }));
  }
}
