import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { PokemonService } from 'src/app/services/pokemon.service';
import { LoadPokemonGenerationsAction } from './pokemon.actions';
import { BasicGeneration, PokemonGenerationResult, PokemonStateModel } from './pokemon.model';

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
    basicGenerations: [],
    generationResult: initialGenerationResult
  },
})
@Injectable()
export class PokemonState {
  constructor(private pokemonService: PokemonService) {}

  @Selector()
  public static basicGenerations(state: PokemonStateModel): BasicGeneration[] {
    return state.basicGenerations;
  }

  @Selector()
  public static generationResult(state: PokemonStateModel): PokemonGenerationResult {
    return state.generationResult;
  }

  @Action(LoadPokemonGenerationsAction)
  public loadPokemonGenerations(context: StateContext<PokemonStateModel>): void {
    this.pokemonService.generations().subscribe((generationResult: PokemonGenerationResult) => {
      context.setState({
        generationResult,
        basicGenerations: generationResult.results
      });
    });
  }
}
