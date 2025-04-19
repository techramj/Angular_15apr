import { Component } from '@angular/core';
import { CompCComponent } from '../comp-c/comp-c.component';

@Component({
  selector: '[app-comp-b]',
  standalone: true,
  imports: [CompCComponent],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent {

}
