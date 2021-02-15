import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonGeneration, PokemonGenerationResult } from 'src/app/modules/generations/model/pokemon-generation.model';
import { PokemonRegion } from 'src/app/modules/regions/model/pokemon-region.model';
import { PokemonSpecies } from 'src/app/modules/species/model/pokemon-species.model';

@Injectable({providedIn: 'root'})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  /**
   * Returns the list of generations
   */
  generations(): Observable<PokemonGenerationResult> {
    return this.httpClient.get<PokemonGenerationResult>(`${this.API_URL}/generation`);
  }

  /**
   * Returns the details of a generation by URL
   */
  generation(url: string): Observable<PokemonGeneration> {
    return this.httpClient.get<PokemonGeneration>(url);
  }

  /**
   * Returns the details of a region by name
   * @param name name of the region used as id
   */
  region(name: string): Observable<PokemonRegion> {
    return this.httpClient.get<PokemonRegion>(`${this.API_URL}/region/${name}`);
  }

  /**
   * Returns the details of a pokemon species by name
   * @param name name of the species used as id
   */
  species(name: string): Observable<PokemonSpecies> {
    return this.httpClient.get<PokemonSpecies>(`${this.API_URL}/pokemon-species/${name}`);
  }
}