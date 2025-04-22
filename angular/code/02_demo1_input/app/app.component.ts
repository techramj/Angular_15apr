import { Component } from '@angular/core';
import { EmployeesComponent } from "./employees/employees.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02_input_demo';
}
