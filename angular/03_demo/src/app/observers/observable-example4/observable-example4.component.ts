import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-example4',
  standalone: true,
  imports: [],
  templateUrl: './observable-example4.component.html',
  styleUrl: './observable-example4.component.css'
})
export class ObservableExample4Component {

  subscription1!:Subscription;

  ngOnInit(){
    let ob = new Observable((sub)=>{
      let count = 0;
      setInterval(()=>{
        sub.next(count);
        count++;
      }, 1000);

      setTimeout(()=>{
        //sub.complete();
      }, 10000);
    });

    this.subscription1 = ob.subscribe({
      next(data){
        console.log(data);
      }
    });
  }

  ngOnDestroy(): void {
    console.log('subscription unscribed')
    this.subscription1.unsubscribe();
    console.log('subscription unscribed')
  }

}
