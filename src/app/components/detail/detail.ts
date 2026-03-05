import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class DetailComponent {
  @Input() jugador: any = null;
}