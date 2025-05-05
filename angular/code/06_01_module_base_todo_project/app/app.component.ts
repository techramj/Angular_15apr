import { Component } from '@angular/core';
import { User } from './user.model';
import { DUMMY_USERS } from './dummy_users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '00_project';

  users:User[] = DUMMY_USERS
  selectedUser!:User;


  onSelectUser( user:User){
    this.selectedUser = user;
  }

}
