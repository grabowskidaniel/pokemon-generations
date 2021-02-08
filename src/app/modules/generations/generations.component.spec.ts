import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { PokemonState } from 'src/app/store/pokemon/pokemon.state';
import { GenerationsComponent } from './generations.component';
import { GenerationsModule } from './generations.module';

describe('GenerationsComponent', () => {
  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationsModule, RouterModule.forRoot([]), NgxsModule.forRoot([PokemonState]), HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
