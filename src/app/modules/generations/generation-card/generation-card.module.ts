import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { GenerationNamePipeModule } from 'src/app/shared/pipes/generation-name/generation-name.pipe.module';
import { GenerationCardComponent } from './generation-card.component';

@NgModule({
  declarations: [GenerationCardComponent],
  imports: [
    CommonModule,
    CardModule,
    GenerationNamePipeModule,
    LabelModule
  ],
  exports: [GenerationCardComponent]
})
export class GenerationCardModule { }
