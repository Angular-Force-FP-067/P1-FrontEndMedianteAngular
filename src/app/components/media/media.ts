import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.html',
  styleUrls: ['./media.css'],
})
export class Media {
  @Input() videoUrl: string = '';
  @Input() titulo: string = '';
}