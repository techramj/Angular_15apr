import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  message= '';
  count = 10;


  displayMessage(cnt: number){
    this.count = cnt;
    if(this.message){
      this.message = 'Welcome again...';
    }else{
      this.message = "Welcome";
    }
    
  }
}
