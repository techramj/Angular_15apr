import { Component, DestroyRef, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example5',
  standalone: true,
  imports: [],
  templateUrl: './observable-example5.component.html',
  styleUrl: './observable-example5.component.css'
})
export class ObservableExample5Component {

  destroyRef = inject(DestroyRef);


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
  
     let subscription1 = ob.subscribe({
        next(data){
          console.log(data);
        }
      });

      this.destroyRef.onDestroy(()=>{
        console.log('unscribed the subscription....')
        subscription1.unsubscribe();
      });

    }

}
