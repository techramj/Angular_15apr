import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  count = 0;

  @Output() counter = new EventEmitter<number>();


  incrementCount(){
    this.count++;
    this.counter.emit(this.count);
  }
}
