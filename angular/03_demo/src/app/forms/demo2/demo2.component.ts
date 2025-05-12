import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {

  username:string = 'Defaultusernmae';
  email:string = 'default@test.com';

  onSubmit(form:NgForm){
   console.log('username: ',form.value.username);
   console.log('email: ', form.value.email);
   console.log(form);
  }
}
