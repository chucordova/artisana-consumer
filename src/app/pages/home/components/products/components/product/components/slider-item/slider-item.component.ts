import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css'],
})
export class SliderItemComponent {
  @Input() elementos: { nombre: string; precio: number }[] = [];
  @Output() change = new EventEmitter<number>(); // <-- enviamos índice seleccionado

  index = 0;

  siguiente() {
    this.index = (this.index + 1) % this.elementos.length;
    this.change.emit(this.index); // <-- avisar al padre
  }

  anterior() {
    this.index = (this.index - 1 + this.elementos.length) % this.elementos.length;
    this.change.emit(this.index); // <-- avisar al padre
  }
}
