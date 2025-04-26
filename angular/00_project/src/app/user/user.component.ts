import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!:User;
  @Output() selectUser = new EventEmitter<User>();

  get imagePath(){
    return "images/users/"+this.user.avatar;
  }

  onSelect(){
    //emit event to parent component, send user object or user name or user id
     this.selectUser.emit(this.user);
  }
}
