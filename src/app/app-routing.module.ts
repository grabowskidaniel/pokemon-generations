import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/generations/generations.module').then(m => m.GenerationsModule)
      },
      {
        path: 'region/:name',
        pathMatch: 'full',
        loadChildren: () => import('./modules/regions/regions.module').then(m => m.RegionsModule)
      },
      {
        path: 'species/:name',
        pathMatch: 'full',
        loadChildren: () => import('./modules/species/species.module').then(m => m.SpeciesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
