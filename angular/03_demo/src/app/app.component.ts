import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NoSignalComponent } from "./no-signal/no-signal.component";
import { SignalComponent } from "./signal/signal.component";
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo.component";
import { SeriveDemoComponent } from "./serive-demo/serive-demo.component";
import { SeriveDemo1Component } from "./serive-demo1/serive-demo1.component";
import { ParentComponent } from "./parent/parent.component";
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NoSignalComponent, SignalComponent, LifecycleDemoComponent, SeriveDemoComponent, SeriveDemo1Component, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // providers: [DataService, LogService],
})
export class AppComponent {
  title = '03_demo';
}
