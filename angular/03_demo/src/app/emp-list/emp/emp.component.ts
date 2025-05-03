import { Component, Input } from '@angular/core';
import { Emp } from '../emp.model';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
  @Input()  emp!:Emp;
}
