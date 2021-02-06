import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../environments/environment';
import { PokemonState } from './pokemon/pokemon.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsModule.forRoot([PokemonState], {
      developmentMode: !environment.production,
      selectorOptions: {},
    }),
  ],
  exports: [NgxsReduxDevtoolsPluginModule, NgxsModule],
})
export class NgxsStoreModule {}
