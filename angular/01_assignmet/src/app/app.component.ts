import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SelectorComponent } from './selector/selector.component';
import { UsersComponent } from "./users/users.component";
import { ButtonBannerComponent } from "./button-banner/button-banner.component";
import { ServersComponent } from "./servers/servers.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
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
