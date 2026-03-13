import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/players';
import { PLAYERS } from '../../data/players';
import { DetailComponent } from '../detail/detail';
import { MediaComponent } from '../media/media'; 

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [FormsModule, CommonModule, DetailComponent, MediaComponent], 
  templateUrl: './players.html',
  styleUrls: ['./players.css']
})
export class PlayersComponent {

  players: Player[] = PLAYERS;

  filtroNombre: string = '';
  filtroPosicion: string = '';
  filtroEdadMin?: number = 20;

  // 1. Inicializamos explícitamente como undefined
  selectedPlayer: Player | undefined = undefined;

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

  // 2. Método para asignar el jugador
  seleccionarPlayer(player: Player): void {
    this.selectedPlayer = player;
  }
}