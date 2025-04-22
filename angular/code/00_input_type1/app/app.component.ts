import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { Comp1Component } from './comp1/comp1.component';
import { CompAComponent } from "./comp-a/comp-a.component";
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, CompAComponent, CompAComponent,CompBComponent, CompCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_demo1';

  a:number = 10;
  b:number = 20;



  user1 = {name:'Jack', age:23, nationality:'American'};

  users = [
    {name:'Jack', age:23, nationality:'American'},
    {name:'Sam', age:31, nationality:'UK'},
    {name:'Ajay', age:21, nationality:'Indian'},
  ];

  ngOnInit(): void {
    let c = this.a+this.b;
    console.log("c= "+c);
    
  }


}
