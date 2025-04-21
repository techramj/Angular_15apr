import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SelectorComponent } from './selector/selector.component';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SelectorComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appUsers = [
    {name:'Jack', age:23, nationality:'US'},
    {name:'Sam', age:25, nationality:'US'},
    {name:'Jessica', age:0, nationality:'UK'},
    {name:'Ajay', nationality:''},
  ];
}
