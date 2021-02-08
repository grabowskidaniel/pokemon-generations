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

  openRegion(name: string): void {
    this.router.navigate(['region', name]);
  }
}
