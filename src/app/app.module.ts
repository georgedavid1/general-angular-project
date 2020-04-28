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
import {TableModule} from 'primeng/table';
import { RenderTestDirective } from './pages/home/render-test.directive';

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
    RenderTestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
