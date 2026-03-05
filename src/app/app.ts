import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from './components/detail/detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'equipo-basket';

  jugadorSeleccionado = {
    nombre: 'Pau Gasol',
    posicion: 'Pívot',
    altura: '2.16m',
    foto: 'PauGasol.avif'
  };
}