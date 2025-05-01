import { Component, Input } from '@angular/core';
import { Server } from '../server.type';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  @Input() server!:Server;
}
