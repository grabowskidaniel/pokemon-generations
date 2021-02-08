import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleCaseDashedNamePipeModule } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe.module';
import { SpeciesCardModule } from './species-card/species-card.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    SpeciesCardModule,
    TitleCaseDashedNamePipeModule
  ]
})
export class SpeciesModule { }
