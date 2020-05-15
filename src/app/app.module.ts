import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FutureComponent } from './pages/future/future.component';
import { BoardComponent } from './board/board.component';
import { PokemonTableComponent } from './pages/pokemon-list/pokemon-table/pokemon-table.component';
import { FilterComponent } from './shared/filter/filter.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RenderTestDirective } from './pages/home/render-test.directive';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/components/button/button.component';
import { AngularPracticeComponent } from './pages/angular-practice/angular-practice.component';
import { CardComponent } from './shared/card/card.component';
//TODO move some components to common module.
//TODO when the time comes split out app into separate modules
//TODO Lazily load that sh*t
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    MenuComponent,
    HomeComponent,
    FutureComponent,
    BoardComponent,
    PokemonTableComponent,
    FilterComponent,
    RenderTestDirective,
    ButtonComponent,
    AngularPracticeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
