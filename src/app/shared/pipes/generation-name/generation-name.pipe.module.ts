import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenerationNamePipe } from './generation-name.pipe';

@NgModule({
  declarations: [GenerationNamePipe],
  imports: [CommonModule],
  exports: [GenerationNamePipe]
})
export class GenerationNamePipeModule { }
