import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from './components/detail/detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailComponent],
import { Media } from './components/media/media';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Media],
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
    foto: 'PauGasol2.avif'
  };
}
export class App {
  protected readonly title = signal('equipo-basket');
  jugadorSeleccionado = {
    nombre: 'Lebron James',
    video: 'assets/videos/jugador01.mp4'
  };
}
