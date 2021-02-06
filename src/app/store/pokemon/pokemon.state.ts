import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
import { LoadPokemonGenerationsAction } from './pokemon.actions';
import { PokemonGenerationResult, PokemonStateModel } from './pokemon.model';

const POKEMON_TOKEN: StateToken<PokemonStateModel> = new StateToken('Pokemon');

@State<PokemonStateModel>({
  name: POKEMON_TOKEN,
  defaults: {
    generations: [],
  },
})
@Injectable()
export class PokemonState {
  @Selector()
  public static generations(state: PokemonStateModel): PokemonGenerationResult[] {
    return state.generations;
  }

  @Action(LoadPokemonGenerationsAction)
  public loadPokemonGenerations(context: StateContext<PokemonStateModel>): Observable<PokemonStateModel> {
    // todo: buscar geracoes da api e mudar map para tap
    return of([]).pipe(map(generations => context.setState({ generations })));
  }
}
