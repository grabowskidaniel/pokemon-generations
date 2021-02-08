import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonStateFacadeService } from 'src/app/services/pokemon-state-facade.service';
import { PokemonGeneration } from './model/pokemon-generation.model';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {
  public generations$: Observable<PokemonGeneration[]> = this.pokemonStateFacadeService.generations$;

  constructor(private pokemonStateFacadeService: PokemonStateFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonStateFacadeService.loadPokemonGenerations();
  }

  /**
   * Redirects to another page with more information about the region
   * @param name name of the region used as ID
   */
  openRegion(name: string): void {
    this.router.navigate(['region', name]);
  }

  /**
   * Redirects to another page to show the list of species
   */
  openSpecies(generation: PokemonGeneration): void {
    this.router.navigate(['species', generation.name]);
  }
}
