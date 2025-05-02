import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-serive-demo1',
  standalone: true,
  imports: [],
  templateUrl: './serive-demo1.component.html',
  styleUrl: './serive-demo1.component.css'
})
export class SeriveDemo1Component {

  logService = new LoggingService();

  ngOnInit(): void {
    //console.log('Log at '+new Date()+' ngOnInit of Service Demo1');
    this.logService.log('ngOnInit of Service Demo1');
  }

}
