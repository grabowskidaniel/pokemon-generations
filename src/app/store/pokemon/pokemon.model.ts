export interface DefaultResult {
  name: string;
  url: string;
}

export interface NameResult {
  name: string;
  language: { name: string; url: string };
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#generations
 */
export interface PokemonGeneration {
  id: number;
  name: string;
  abilitites: DefaultResult[];
  main_region: DefaultResult;
  moves: DefaultResult[];
  names: NameResult[];
  pokemon_species: DefaultResult[];
  types: DefaultResult[];
  version_groups: DefaultResult[];
}

export interface PokemonGenerationResult {
  count: number;
  next: string;
  previous: string;
  results: DefaultResult[];
}

export class PokemonStateModel {
  constructor(public generations: PokemonGenerationResult[]) {}
}
