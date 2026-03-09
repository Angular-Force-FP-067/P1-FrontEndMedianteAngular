import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
  @Input() videoUrl: string = '';
  @Input() titulo: string = '';
}
