import { Component, input, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    count:number= 0;
    message = input<string>('Hello');

    //dataService = new DataService(); if you manually create the data service, it will create a new instance of the data service

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
      this.count = this.dataService.getCount();
    }

    
    increment(){
      this.count = this.dataService.getCount();
      this.count++;
      this.dataService.setCount(this.count);
    }
}
