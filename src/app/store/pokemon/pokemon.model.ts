import { PokemonGeneration, PokemonGenerationResult } from 'src/app/modules/generations/model/pokemon-generation.model';
import { PokemonSpecies } from 'src/app/modules/species/model/pokemon-species.model';

export class PokemonStateModel {
  constructor(
    public generationResult: PokemonGenerationResult,
    public generations: PokemonGeneration[],
    public species: Record<string, PokemonSpecies[]>
  ) {}
}
