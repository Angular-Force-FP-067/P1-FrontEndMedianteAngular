import { Component } from '@angular/core';
import { DetailComponent } from '../detail/detail';
import { Media } from '../media/media';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailComponent, Media],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
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