import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { User } from './user.model';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
