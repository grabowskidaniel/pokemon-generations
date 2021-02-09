import { TitleCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooleanPipeModule } from 'src/app/shared/pipes/boolean/boolean.pipe.module';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { SpeciesCardComponent } from './species-card.component';
import { SpeciesCardModule } from './species-card.module';

const defaultNamedAPIResponse = {name: '', url: ''};

describe('SpeciesCardComponent', () => {
  let component: SpeciesCardComponent;
  let fixture: ComponentFixture<SpeciesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesCardModule, BooleanPipeModule],
      providers: [ TitleCasePipe, TitleCaseDashedNamePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesCardComponent);
    component = fixture.componentInstance;
    component.species = {
      id: 1,
      base_happiness: 0,
      capture_rate: 50,
      color: defaultNamedAPIResponse,
      egg_groups: [defaultNamedAPIResponse],
      evolution_chain: defaultNamedAPIResponse,
      evolves_from_species: defaultNamedAPIResponse,
      flavor_text_entries: [{ flavor_text: '', language: defaultNamedAPIResponse, version: defaultNamedAPIResponse }],
      form_descriptions: [{ language: { name: '', url: ''}, description: '' }],
      forms_switchable: false,
      gender_rate: 0,
      genera: [{ genus: '', language: defaultNamedAPIResponse }],
      generation: defaultNamedAPIResponse,
      growth_rate: defaultNamedAPIResponse,
      habitat: defaultNamedAPIResponse,
      has_gender_differences: true,
      hatch_counter: 0,
      is_baby: true,
      is_legendary: true,
      is_mythical: true,
      name: 'name',
      names: [{name: '', language: defaultNamedAPIResponse}],
      order: 0,
      pal_park_encounters: [ { area: defaultNamedAPIResponse, base_score: 0, rate: 0} ],
      pokedex_numbers: [ { entry_number: 0, pokedex: defaultNamedAPIResponse } ],
      shape: defaultNamedAPIResponse,
      varieties: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
