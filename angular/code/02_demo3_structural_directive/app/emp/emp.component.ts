import { Component, Input } from '@angular/core';
import { DUMMY_EMPLOYEES } from '../dummy_employees';
import { Employee } from '../emp.type';
import { NgIf } from '@angular/common';
const randomIdx = Math.floor(Math.random() * DUMMY_EMPLOYEES.length);
@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {

  @Input() selectedEmp!:Employee;

  displayEmpDetails(){
    console.log('button clicked');
    let idx = Math.floor(Math.random() * DUMMY_EMPLOYEES.length);
    this.selectedEmp = DUMMY_EMPLOYEES[idx];
  }

}
