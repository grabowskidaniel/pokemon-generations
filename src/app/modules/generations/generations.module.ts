import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenerationCardModule } from './components/generation-card/generation-card.module';
import { GenerationsRoutingModule } from './generations-routing.module';
import { GenerationsComponent } from './generations.component';

@NgModule({
  declarations: [GenerationsComponent],
  imports: [
    CommonModule,
    GenerationsRoutingModule,
    GenerationCardModule
  ]
})
export class GenerationsModule { }
