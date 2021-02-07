export interface NamedAPIResource {
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
// TODO: mover
export interface PokemonGeneration {
  id: number;
  name: string;
  abilitites: NamedAPIResource[];
  main_region: NamedAPIResource;
  moves: NamedAPIResource[];
  names: NameResult[];
  pokemon_species: NamedAPIResource[];
  types: NamedAPIResource[];
  version_groups: NamedAPIResource[];
}

// TODO: mover
export interface PokemonGenerationResult {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export class PokemonStateModel {
  constructor(
    public generationResult: PokemonGenerationResult,
    public generations: PokemonGeneration[]
  ) {}
}
