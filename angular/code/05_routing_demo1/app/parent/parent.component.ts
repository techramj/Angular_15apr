import { Component, inject } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: []
})
export class ParentComponent {

  cnt = 10;
  showComponent = false;
  dataService:DataService = inject(DataService);

  /*constructor(private dataService: DataService) {
  }*/

  //dataService = new DataService();

  ngOnInit(): void {
   this.cnt = this.dataService.getCount();
  }

  hideAndUnhide(){
    this.showComponent = !this.showComponent;
  }

  increment(){
    this.cnt = this.dataService.getCount();
    this.cnt++;
    this.dataService.setCount(this.cnt);
  }

}
