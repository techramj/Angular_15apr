import { Component, DestroyRef, inject } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example6',
  standalone: true,
  imports: [],
  templateUrl: './observable-example6.component.html',
  styleUrl: './observable-example6.component.css'
})
export class ObservableExample6Component {

  destroyRef = inject(DestroyRef);

  ngOnInit(){
    let observable = new Observable<string>(sub=>{
      sub.next('one');
      sub.next('two');
      sub.next('twenty one');
      sub.next('twenty five');
      sub.next('one hundered');
      sub.next('two hundred');
      sub.next('one thousand');
    });

    const sub =  observable
    .pipe<string>(filter(data=> data.includes('one')))
    .pipe<string>(map(data => data.toUpperCase()))
    .pipe<string>(map(data => data+"!"))
    .subscribe({
      next(data){
        console.log('data: ', data);
      }
    });

    this.destroyRef.onDestroy(()=>{
      sub.unsubscribe();
    });
  }

}
