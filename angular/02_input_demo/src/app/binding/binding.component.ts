import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  msg1 = 'One way binding using Interpolation';
  msg2 = 'One way binding using Property/Attribute Binding';
  msg3 = "Two way binding";



}
