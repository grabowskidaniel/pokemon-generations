import { NamedAPIResource, NameResult } from '../../generations/model/pokemon-generation.model';

/**
 * Source:
 * https://pokeapi.co/docs/v2#region
 */
export interface PokemonRegion {
  id: number;
  locations: NamedAPIResource[];
  name: string;
  names: NameResult[];
  main_generation: NamedAPIResource;
  pokedexes: NamedAPIResource[];
  version_groups: NamedAPIResource[];
}

