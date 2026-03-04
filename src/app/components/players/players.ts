import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Player } from '../../models/players';
import { PLAYERS } from '../../data/players';

@Component({
  selector: 'app-players',
  standalone: true,            // 👈 debe estar
  imports: [FormsModule, CommonModule],      // 👈 añadir esto
  templateUrl: './players.html',
  styleUrls: ['./players.css']
})
export class PlayersComponent {

  players: Player[] = PLAYERS;

  filtroNombre: string = '';
  filtroPosicion: string = '';
  filtroEdadMin?: number;

  selectedPlayer?: Player;

  get playersFiltrados(): Player[] {
    return this.players.filter(player => {
      const coincideNombre = this.filtroNombre
        ? (player.nombre + ' ' + player.apellidos)
            .toLowerCase()
            .includes(this.filtroNombre.toLowerCase())
        : true;

      const coincidePosicion = this.filtroPosicion
        ? player.posicion === this.filtroPosicion
        : true;

      const coincideEdad = this.filtroEdadMin
        ? player.edad >= this.filtroEdadMin
        : true;

      return coincideNombre && coincidePosicion && coincideEdad;
    });
  }

  seleccionarPlayer(player: Player): void {
    this.selectedPlayer = player;
    // Más adelante aquí emitirás el evento al DetailComponent, etc.
  }
}
