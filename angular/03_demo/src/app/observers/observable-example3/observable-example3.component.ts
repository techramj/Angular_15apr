import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example3',
  standalone: true,
  imports: [],
  templateUrl: './observable-example3.component.html',
  styleUrl: './observable-example3.component.css'
})
export class ObservableExample3Component {

  ngOnInit() {
      const observable = new Observable((subscriber) => {
       let num = Math.random()*10;
        setTimeout(() => {
          if(num<5){
            subscriber.next(num);
          }else{
            subscriber.error('value cannot exceed 5: '+ num);
          }
        }, 1000);
      });
  
      console.log('just before subscribe');
      observable.subscribe({
        next(x) {
          console.log('got value ' + x);
        },
        error(err) {
          console.error('something wrong occurred: ' + err);
        },
        complete() {
          console.log('done');
        },
      });
      console.log('just after subscribe');
    }

}
