import { Component } from '@angular/core';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [OneComponent, TwoComponent, ThreeComponent],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

}
