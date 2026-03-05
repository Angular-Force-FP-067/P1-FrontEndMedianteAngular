import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

import { DetailComponent } from './components/detail/detail'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule, DetailComponent],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> 380690c6f4d5c3eaa9838ff6fc5fb61f686f3dac
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket');
<<<<<<< HEAD

  public jugadorSeleccionado = signal<any>(null);

  constructor() {
    // ESTO ES SOLO PARA PROBAR: 
    this.jugadorSeleccionado.set({
      nombre: 'Pau',
      apellidos: 'Gasol',
      posicion: 'Pívot',
      edad: 43,
      altura: 2.16,
      foto: 'PauGasol.avif'
    });
  }
}
=======
}
>>>>>>> 380690c6f4d5c3eaa9838ff6fc5fb61f686f3dac
