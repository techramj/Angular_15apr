import { Component } from '@angular/core';
import { EmployeesComponent } from "./employees/employees.component";
import { DUMMY_EMPLOYEES } from './dummy_employees';
import { type Employee } from './emp.type';
import { ParentComponent } from "./parent/parent.component";
import { BasicComponent } from "./basic/basic.component";
import { BindingComponent } from "./binding/binding.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeesComponent, ParentComponent, BasicComponent, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  allEmpDetails:Employee[]  = DUMMY_EMPLOYEES;
}
