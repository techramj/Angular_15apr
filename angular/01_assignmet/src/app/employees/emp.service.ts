import { Injectable } from '@angular/core';
import { Emp } from './emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  employees:Emp[] = [
    {id:1,name:'John', salary:5000, email:'test1@gmail.com'},
    {id:2,name:'Johny', salary:15000, email:'test2@gmail.com'},
    {id:3,name:'Johnson', salary:55000, email:'test3@gmail.com'},
  ];

  constructor() { }

  getEmployees():Emp[]{
    return this.employees;
  }

  getEmployeeById(id:number):Emp | undefined{
    return this.employees.find((emp) => emp.id == id);
  }

  deleteEmployee(id:number):void{
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  updateEmployee(emp:Emp){
    //logic
  }
  
}
