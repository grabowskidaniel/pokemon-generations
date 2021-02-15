import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderModule } from './shared/components/loader/loader.module';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { NgxsStoreModule } from './store/ngxs-store.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsStoreModule,
    HttpClientModule,
    LoaderModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      preventDuplicates: true
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
