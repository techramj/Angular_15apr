import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-serive-demo',
  standalone: true,
  imports: [],
  templateUrl: './serive-demo.component.html',
  styleUrl: './serive-demo.component.css'
})
export class SeriveDemoComponent {

  task = 'Service Demo';

  logService = new LoggingService();


  ngOnInit(): void {
    //console.log('ngOnInit of Service Demo');
    this.logService.log('ngOnInit of Service Demo')
  }
}
