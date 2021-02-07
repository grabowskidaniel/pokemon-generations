import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ValueModule } from 'src/app/shared/components/value/value.module';
import { GenerationNamePipeModule } from 'src/app/shared/pipes/generation-name/generation-name.pipe.module';
import { GenerationCardComponent } from './generation-card.component';

@NgModule({
  declarations: [GenerationCardComponent],
  imports: [
    CommonModule,
    CardModule,
    GenerationNamePipeModule,
    ValueModule
  ],
  exports: [GenerationCardComponent]
})
export class GenerationCardModule { }
