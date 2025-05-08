import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example2',
  standalone: true,
  imports: [],
  templateUrl: './observable-example2.component.html',
  styleUrl: './observable-example2.component.css'
})
export class ObservableExample2Component {

  ngOnInit() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
        subscriber.next(40);
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
