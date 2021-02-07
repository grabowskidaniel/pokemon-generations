import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'generations',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/generations/generations.module').then(m => m.GenerationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
