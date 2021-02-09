import { TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { PokemonState } from 'src/app/store/pokemon/pokemon.state';
import { SpeciesComponent } from './species.component';
import { SpeciesModule } from './species.module';

describe('SpeciesComponent', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpeciesModule, RouterModule.forRoot([]), NgxsModule.forRoot([PokemonState]), HttpClientModule ],
      providers: [ TitleCasePipe, TitleCaseDashedNamePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesComponent);
    component = fixture.componentInstance;

    component.generationName = 'Generation IV';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
