import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { GenerationNamePipe } from 'src/app/shared/pipes/generation-name/generation-name.pipe';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { NamedAPIResource } from '../generations/model/pokemon-generation.model';
import { PokemonRegion } from './model/pokemon-region.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnDestroy {
  public regionName: string;
  public loaded = false;
  public region: PokemonRegion;

  public locationNames: string;
  public mainGeneration: string;
  public pokedexes: string;
  public versionGroups: string;

  private unsub$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private generationNamePipe: GenerationNamePipe,
    private titleCaseDashedName: TitleCaseDashedNamePipe) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.unsub$)).subscribe(param => {
      this.pokemonService.region(param.name).pipe(takeUntil(this.unsub$)).subscribe(region => {
        const regionName = region.names.find(name => name.language.name.toLowerCase() === 'en');
        this.regionName = regionName ? regionName.name : 'Unknown Region';

        this.region = region;

        this.locationNames = this.convertListToString(region.locations);
        this.mainGeneration = this.generationNamePipe.transform(region.main_generation.name, '-');
        this.pokedexes = this.convertListToString(region.pokedexes);
        this.versionGroups = this.convertListToString(region.version_groups);

        this.loaded = true;
      });
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  private convertListToString(list: NamedAPIResource[]): string {
    return list.map(value => this.titleCaseDashedName.transform(value.name)).join(', ');
  }
}
