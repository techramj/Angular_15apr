import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '00_project';

  user1 = {id:'u1', name:'Banner', avatar:'hulk.jpeg'};
  user2 = {id:'u2', name:'Loki', avatar:'loki.jpeg'};
}
