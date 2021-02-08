import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonGeneration, PokemonGenerationResult } from '../modules/generations/model/pokemon-generation.model';
import { PokemonRegion } from '../modules/regions/model/pokemon-region.model';

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
}
