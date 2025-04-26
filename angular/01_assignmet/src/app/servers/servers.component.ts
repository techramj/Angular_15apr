import { Component } from '@angular/core';
import { Server } from './server.type';
import { ServerComponent } from "./server/server.component";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  servers:Server[] = [
    { id: 1, name: 'Server 1', status: 'active',  temperature:43, tempUnit:'C' }, 
    { id: 2, name: 'Server 1', status: 'inactive',  temperature:35, tempUnit:'C' }, 
  ];

}
