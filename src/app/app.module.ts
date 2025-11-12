import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderModule } from './shared/components/loader/loader.module';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { NgxsStoreModule } from './store/ngxs-store.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgxsStoreModule,
        LoaderModule,
        ToastrModule.forRoot({
            maxOpened: 1,
            preventDuplicates: true
        }),
        FontAwesomeModule], providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
