import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './generations.component';

const routes: Routes = [{
  path: '',
  component: GenerationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerationsRoutingModule { }
