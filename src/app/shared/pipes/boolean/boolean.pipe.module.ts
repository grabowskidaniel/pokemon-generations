import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooleanPipe } from './boolean.pipe';

@NgModule({
  declarations: [BooleanPipe],
  imports: [
    CommonModule
  ],
  exports: [BooleanPipe]
})
export class BooleanPipeModule { }
