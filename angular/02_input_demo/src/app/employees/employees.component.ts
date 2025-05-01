import { Component, Input } from '@angular/core';
import { EmpComponent } from "../emp/emp.component";
import { Employee } from '../emp.type';
import { NgFor } from '@angular/common';
//import { DUMMY_EMPLOYEES } from '../dummy_employees';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [EmpComponent, NgFor],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  @Input() employees!:Employee[];

}
