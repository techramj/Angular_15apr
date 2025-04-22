import { Component } from '@angular/core';
import { EmployeesComponent } from "./employees/employees.component";
import { DUMMY_EMPLOYEES } from './dummy_employees';
import { type Employee } from './emp.type';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  allEmpDetails:Employee[]  = DUMMY_EMPLOYEES;
}
