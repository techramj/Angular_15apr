import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example1',
  standalone: true,
  imports: [],
  templateUrl: './observable-example1.component.html',
  styleUrl: './observable-example1.component.css'
})
export class ObservableExample1Component implements OnInit {

  ngOnInit(): void {
    console.log('ObservableExample1Component loaded');

    const ob1 = new Observable(sub => {
      console.log('Inside Observable, Observable initaited...');
      setTimeout(()=>{
        sub.next("Data1"); 
        sub.next("Data2"); 
        sub.next("Data3"); 
      }, 3000);
    });

    ob1.subscribe(data=>{
      console.log('After executing observable, data recievied: ', data);
    });

    console.log('ObservableExample1Component end...');
  }

}
