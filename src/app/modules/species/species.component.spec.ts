import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { GenerationNamePipeModule } from 'src/app/shared/pipes/generation-name/generation-name.pipe.module';
import { PokemonState } from 'src/app/store/pokemon/pokemon.state';
import { SpeciesComponent } from './species.component';
import { SpeciesModule } from './species.module';

describe('SpeciesComponent', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SpeciesModule,
        RouterModule.forRoot([]),
        NgxsModule.forRoot([PokemonState]),
        HttpClientModule,
        GenerationNamePipeModule,
        ToastrModule.forRoot({
          maxOpened: 1,
          preventDuplicates: true
        })
      ]
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
