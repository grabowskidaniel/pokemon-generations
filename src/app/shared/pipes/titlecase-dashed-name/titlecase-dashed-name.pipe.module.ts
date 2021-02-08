import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleCaseDashedNamePipe } from './titlecase-dashed-name.pipe';

@NgModule({
  declarations: [TitleCaseDashedNamePipe],
  imports: [
    CommonModule
  ],
  exports: [TitleCaseDashedNamePipe],
  providers: [TitleCasePipe]
})
export class TitleCaseDashedNamePipeModule { }
