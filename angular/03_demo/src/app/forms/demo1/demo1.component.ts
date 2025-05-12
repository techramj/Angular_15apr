import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  onSubmit(u:HTMLInputElement, e:HTMLInputElement, f:HTMLFormElement ){
    console.log('button clicked');
    console.log(u, e);
  }

}
