import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { TitleCaseDashedNamePipeModule } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe.module';
import { SpeciesCardComponent } from './species-card.component';

@NgModule({
  declarations: [SpeciesCardComponent],
  imports: [
    CommonModule,
    CardModule,
    LabelModule,
    TitleCaseDashedNamePipeModule
  ],
  exports: [SpeciesCardComponent]
})
export class SpeciesCardModule { }
