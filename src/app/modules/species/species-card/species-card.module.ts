import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { BooleanPipeModule } from 'src/app/shared/pipes/boolean/boolean.pipe.module';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { TitleCaseDashedNamePipeModule } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe.module';
import { SpeciesCardComponent } from './species-card.component';

@NgModule({
  declarations: [SpeciesCardComponent],
  imports: [
    CommonModule,
    CardModule,
    LabelModule,
    TitleCaseDashedNamePipeModule,
    BooleanPipeModule
  ],
  exports: [SpeciesCardComponent],
  providers: [TitleCaseDashedNamePipe]
})
export class SpeciesCardModule { }
