import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  name =  signal("Jack");
  age =  signal(20);
  x = signal(5);
  y = signal(10);
  total = computed(()=> this.x() + this.y());
  total1 = signal(this.x() + this.y());

  message = signal('');
  //note : when we use singal in two way binding, treat like a property

  increment(){
    this.x.set(this.x() + 1);
    //this.x = computed(()=> this.x() + 1);
    this.y.set(this.y() + 1);
  }

  resetMessage(){
    this.message.set('Reset');
  }

}
