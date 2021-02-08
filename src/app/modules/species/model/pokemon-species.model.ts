import { NamedAPIResource } from '../../generations/model/pokemon-generation.model';

/**
 * Source:
 * https://pokeapi.co/docs/v2#pokemonspeciesvariety
 */
export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#genus
 */
export interface Genus {
  genus: string;
  language: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#description
 */
export interface Description {
  description: string;
  language: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#flavortext
 */
export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#palparkencounterarea
 */
export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#name
 */
export interface Name {
  name: string;
  language: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#apiresource
 */
export interface APIResource {
  url: string;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#pokemonspeciesdexentry
 */
export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource;
}

/**
 * Source:
 * https://pokeapi.co/docs/v2#pokemonspecies
 */
export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource;
  evolution_chain: APIResource;
  habitat: NamedAPIResource;
  generation: NamedAPIResource;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}
