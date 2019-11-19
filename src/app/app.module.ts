import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {HttpClientModule} from '@angular/common/http';



import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AuthService} from './shared/services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {GamesService} from './shared/services/games.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ProductModule} from './product/product.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {GameStateModule} from './shared/store/game-state.module';
import {MatPaginatorModule} from '@angular/material';
import {FooterComponent} from './home/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgAisModule} from 'angular-instantsearch';
import {StoreModule} from '@ngrx/store';
import {gameReducers} from './shared/store/reducers';
import { SearchComponent } from './navbar/search/search.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    SidebarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ProductModule,
    ScrollingModule,
    StoreDevtoolsModule.instrument(),
    GameStateModule,
    MatPaginatorModule,
    NgxPaginationModule,
    NgAisModule.forRoot(),


  ],
  providers: [

    AuthService,
    GamesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

