import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.css'
})
export class Demo4Component {

   @ViewChild('f') form!:NgForm;
   genders = ['female', 'male', 'Not disclosed'];
   questioniare:{question:string, desc:string}[] = [
    {question:'favourite_movie', desc:' Favourite Movie'},
    {question:'favourite_subject', desc:' Favourite Subject'},
    {question:'favourite_language', desc:' Favourite Language'},
    {question:'best_js_framework', desc:' Best JS Framework'},
   ];
  
   defaultQuestion = 'best_js_framework';
    
   onSubmit(){
       console.log(this.form);
       console.log(this.form.value.username, this.form.value.email, this.form.value.question, this.form.value.gender);
      
    }
}
