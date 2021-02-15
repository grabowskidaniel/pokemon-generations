import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent],
  providers: [LoaderService]
})
export class LoaderModule { }
