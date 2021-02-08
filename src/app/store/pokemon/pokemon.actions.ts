export class LoadPokemonGenerationsAction {
  public static type = 'LoadPokemonGenerationsAction';
}

export class LoadPokemonGenerationAction {
  public static type = 'LoadPokemonGenerationAction';
}

export class LoadPokemonSpeciesDetailsAction {
  public static type = 'LoadPokemonSpeciesDetailsAction';
  constructor(public generationName: string) {}
}
