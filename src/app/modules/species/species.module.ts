import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    CardModule,
    LabelModule
  ]
})
export class SpeciesModule { }
