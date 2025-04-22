import { Component, Input } from '@angular/core';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   @Input({required: true,  alias:'seedUser'}) users!:{name:string, age?:number, nationality?:string}[];
}
