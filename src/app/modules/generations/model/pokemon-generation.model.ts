export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface NameResult {
  name: string;
  language: { name: string; url: string };
}

export interface PokemonGenerationResult {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#generations
 */
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
