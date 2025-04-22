import { Component, Input } from '@angular/core';
import { EmpComponent } from "../emp/emp.component";
import { Employee } from '../emp.type';
//import { DUMMY_EMPLOYEES } from '../dummy_employees';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [EmpComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  @Input() employees!:Employee[];
  
}
