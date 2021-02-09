import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenerationNamePipeModule } from 'src/app/shared/pipes/generation-name/generation-name.pipe.module';
import { SpeciesCardModule } from './species-card/species-card.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    SpeciesCardModule,
    GenerationNamePipeModule
  ]
})
export class SpeciesModule { }
