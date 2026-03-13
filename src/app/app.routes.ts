import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PlayersComponent } from './components/players/players';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent }
];