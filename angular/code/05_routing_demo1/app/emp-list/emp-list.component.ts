import { Component } from '@angular/core';
import { type Emp } from './emp.model';
import { EmpComponent } from "./emp/emp.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [EmpComponent],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  empId:string = '3';

   empList:Emp[] =[
    {id:'1', name:'John', salary:5000, email:''},
    {id:'2', name:'John', salary:5000, email:''},
    {id:'3', name:'John', salary:5000, email:''},
   ] 

   constructor(private route:ActivatedRoute){

   }

   ngOnInit(): void {
    /*this.route.paramMap.subscribe((param) => {
      this.empId = param.get('empId') || '0';
    });*/

    this.empId = this.route.snapshot.paramMap.get('id')?.toString() || '0';
    console.log('empId:', this.empId);

    let role = this.route.snapshot.queryParamMap.get('role');
    let job = this.route.snapshot.queryParamMap.get('job');
    console.log('role:'+ role+ ' job:'+ job);
   }

}
