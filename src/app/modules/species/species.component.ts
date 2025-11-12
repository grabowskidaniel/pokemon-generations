import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonStateFacadeService } from 'src/app/shared/services/pokemon/pokemon-state-facade.service';
import { PokemonSpecies } from './model/pokemon-species.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit, OnDestroy {
  public species$: Observable<PokemonSpecies[]>;
  public generationName: string;

  private unsub$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private pokemonStateFacadeService: PokemonStateFacadeService) { }

  ngOnInit(): void {
    this.pokemonStateFacadeService.loadPokemonGenerations();
    this.loadSpeciesDetails();
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  private loadSpeciesDetails(): void {
    this.activatedRoute.params.pipe(takeUntil(this.unsub$)).subscribe(params => {
      if (params?.name) {
        this.generationName = params.name;

        this.species$ = this.pokemonStateFacadeService.generationSpecies$(this.generationName);

        this.pokemonStateFacadeService.generations$.pipe(takeUntil(this.unsub$)).subscribe(species => {
          if (species.length) {
            this.pokemonStateFacadeService.loadSpeciesDetails(this.generationName);
          }
        });
      }
    });
  }
}
