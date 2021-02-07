import { PokemonGeneration, PokemonGenerationResult } from 'src/app/modules/generations/model/pokemon-generation.model';

export class PokemonStateModel {
  constructor(
    public generationResult: PokemonGenerationResult,
    public generations: PokemonGeneration[]
  ) {}
}
