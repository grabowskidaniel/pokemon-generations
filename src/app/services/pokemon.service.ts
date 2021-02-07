import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonGeneration, PokemonGenerationResult } from '../store/pokemon/pokemon.model';

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
   * Returns more information about a generation by URL
   */
  generation(url: string): Observable<PokemonGeneration> {
    return this.httpClient.get<PokemonGeneration>(url);
  }
}
