import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenerationNamePipe } from './generation-name.pipe';

@NgModule({
  declarations: [GenerationNamePipe],
  imports: [CommonModule],
  exports: [GenerationNamePipe],
  providers: [TitleCasePipe, UpperCasePipe]
})
export class GenerationNamePipeModule { }
