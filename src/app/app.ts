import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { Media } from './components/media/media';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  HeaderComponent,
  FooterComponent,
  PlayersComponent,
  DetailComponent,
  Media
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Equipo Basket';
  subtitle = 'Plantilla 2026';

  jugadorSeleccionado = {
    nombre: 'Pau',
    apellidos: 'Gasol',
    posicion: 'Pívot',
    altura: '2.16',
    edad: 43,
    foto: 'PauGasol2.avif',
    video: 'assets/videos/jugador01.mp4'
  };
}