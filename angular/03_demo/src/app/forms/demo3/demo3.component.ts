import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css'
})
export class Demo3Component {

  @ViewChild('f') form!:NgForm;

  
    onSubmit(){
     console.log(this.form);
     console.log(this.form.value.username);
     console.log(this.form.value.email);
    }

}
