import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { GenerationNamePipe } from 'src/app/shared/pipes/generation-name/generation-name.pipe';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    LabelModule
  ],
  exports: [RegionsComponent],
  providers: [TitleCasePipe, UpperCasePipe, GenerationNamePipe, TitleCaseDashedNamePipe]
})
export class RegionsModule { }
