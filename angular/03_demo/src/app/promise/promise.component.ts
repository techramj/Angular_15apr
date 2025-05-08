import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent implements OnInit {

  
  ngOnInit(): void {
   console.log('PromiseComponent loaded... ');
   const promise1 = new Promise( resolve => {
    console.log('Inside promise, promise initaited...');
    setTimeout(()=>{
      resolve('Data1');
      resolve('Data2');
    }, 3000);
   });

   console.log('created promise objected');
    

   //executing promise
   promise1.then(res => {
    console.log('After executing promise, promise recievied: ', res);
   });

   console.log('end of PromiseComponent nginit...')
  }

}
