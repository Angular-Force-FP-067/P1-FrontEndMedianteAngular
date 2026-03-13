import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
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
    video: 'media/players/003/highlight.mp4'
  };
}