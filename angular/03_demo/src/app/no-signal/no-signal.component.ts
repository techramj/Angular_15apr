import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-no-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './no-signal.component.html',
  styleUrl: './no-signal.component.css'
})
export class NoSignalComponent {
  name = "Jack";
  age =  20;
  x = 5;
  y = 10;
  total = this.x + this.y;
  message = '';

  increment(){
    this.x = this.x +1;
    this.y = this.y +1;
    //this.total = this.x + this.y;
  }

}
