import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() cnt = 0;
  @Output() message = new EventEmitter();


  buttonClicked(){
    console.log('button clicked');
    this.cnt++;
    this.message.emit();
    //this.message.emit(this.cnt);
  }
}
