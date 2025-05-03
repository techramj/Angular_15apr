import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [LifecycleComponent],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent {
  cnt = 10;
  showComponent = false;

  constructor() {
    console.log('LifecycleDemoComponent constructor called');
    
  }
  

  hideAndUnhide(){
    this.showComponent = !this.showComponent;
  }

  increment(){
    this.cnt++;
  }

}
