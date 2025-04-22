import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*@Input() name:string = '';
  @Input() age:number | undefined = 0;
  @Input() nationality:string  | undefined= '';

  */

  @Input() user!:{name:string, age?:number, nationality?:string};
}
