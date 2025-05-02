import { Component, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {


  @Input() count:number= 0;
  message = input<string>('Hello');

  constructor(){
    console.log('LifecycleComponent Constructor called and value of count is: ' + this.count);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before ngOnInit when the input properties are bound.
    //Add 'implements OnChanges' to the class.
    console.log('LifecycleComponent ngOnChanges called and value of count is: ' + this.count);
    console.log('changes: ', changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('LifecycleComponent ngOnInit called and value of count is: ' + this.count);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('LifecycleComponent ngOnDestroy called and value of count is: ' + this.count);
  }

  increment(){
    this.count = this.count + 1;;
  }

}
