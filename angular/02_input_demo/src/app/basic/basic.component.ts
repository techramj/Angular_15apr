import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
    title ='Angular Basic Demo';
    titleClassFlag = true;
    titleTextPosition ='left'
    colors = ['red', 'green', 'blue', 'yellow','dummy'];
    day=6;
    min=1;
    max=8;

    show= true;

    emp = {
      id:1,
      name:'Raj Jaiswal',
      salary: '999990',
      variable:.12,
      dob: new Date('1990-01-01'),
      doj: new Date(),
      mobile:8123456789,
      isMarried:true,
      address:{
        city:'Pune',
        state:'MH',
        country:'India'         
      }
  }

  time = new Observable<string>((observer:Subscriber<string>) => { 
    setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      observer.next(time);
    }, 1000);
  });


  setPosition(pos:string){
    this.titleTextPosition = pos;
    console.log(pos);
  }
}
