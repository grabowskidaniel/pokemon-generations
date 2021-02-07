import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent {
  @Input() title: string;
}
