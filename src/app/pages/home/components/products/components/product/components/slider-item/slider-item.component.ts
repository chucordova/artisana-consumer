import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css'],
})
export class SliderItemComponent {
  @Input() elementos: string[] = [];
  index = 0;

  siguiente() {
    this.index = (this.index + 1) % this.elementos.length;
  }

  anterior() {
    this.index = (this.index - 1 + this.elementos.length) % this.elementos.length;
  }
}
