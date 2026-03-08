import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Media } from './components/media/media';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Media],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket');
  jugadorSeleccionado = {
    nombre: 'Lebron James',
    video: 'assets/videos/jugador01.mp4'
  };
}
