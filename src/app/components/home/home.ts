import { Component } from '@angular/core';
import { PlayersComponent } from '../players/players';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayersComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  title = 'Equipo Basket';
  subtitle = 'Plantilla 2026';
}