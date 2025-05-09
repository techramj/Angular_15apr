import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';
import { Emp } from './emp.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  
  empList:Emp[] = [];

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.loadData();
  }

  deleteEmp(empId:number){
    this.empService.deleteEmployee(empId).subscribe(data => {
      console.log('employee deleted: ',data);
      this.loadData();
    });
    
  }

  loadData(){
    this.empService.getEmployees().subscribe(data =>{
      this.empList = data;
    });
  }

}
