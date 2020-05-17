import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FutureComponent } from './pages/future/future.component';
import { BoardComponent } from './pages/board/board.component';
import { AngularPracticeComponent } from './pages/angular-practice/angular-practice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'future', component: FutureComponent },
  { path: 'standup', component: BoardComponent },
  { path: 'practice', component: AngularPracticeComponent },  
  { path: 'pokemon-list', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
