import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NamedAPIResource, PokemonGeneration } from '../model/pokemon-generation.model';
import { GenerationCardComponent } from './generation-card.component';
import { GenerationCardModule } from './generation-card.module';

const mockNamedAPIResourceMock: NamedAPIResource = {name: 'name', url: 'url'};
const generationMock: PokemonGeneration = {
  id: 1,
  abilitites: [mockNamedAPIResourceMock],
  main_region: mockNamedAPIResourceMock,
  moves: [mockNamedAPIResourceMock],
  name: 'generation name',
  names: [{ name: 'name', language: mockNamedAPIResourceMock}],
  pokemon_species: [mockNamedAPIResourceMock],
  types: [mockNamedAPIResourceMock],
  version_groups: [mockNamedAPIResourceMock]
};

describe('GenerationCardComponent', () => {
  let component: GenerationCardComponent;
  let fixture: ComponentFixture<GenerationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationCardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationCardComponent);
    component = fixture.componentInstance;
    component.generation = generationMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
