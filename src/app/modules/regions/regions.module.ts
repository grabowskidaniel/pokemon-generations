import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    LabelModule
  ],
  exports: [RegionsComponent]
})
export class RegionsModule { }
