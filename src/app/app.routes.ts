import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PlayersComponent } from './components/players/players';
import { ArquetiposComponent } from './components/arquetipos/arquetipos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'arquetipos', component: ArquetiposComponent }
];