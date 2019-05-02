import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationModule} from './Authentication/authentication.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CoreModule} from './core/core.module';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Alert} from 'selenium-webdriver';
import {AlertService, AuthenticationServiceService, UserService} from './Authentication/Services';
import {fakeBackendProvider, JwtInterceptor} from './_helpers';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    CoreModule,
    HttpClientModule,
    routing

  ],
  providers: [
    AlertService,
    AuthenticationServiceService,
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

