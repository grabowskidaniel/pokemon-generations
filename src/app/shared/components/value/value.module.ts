import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValueComponent } from './value.component';

@NgModule({
  declarations: [ValueComponent],
  imports: [
    CommonModule
  ],
  exports: [ValueComponent]
})
export class ValueModule { }
