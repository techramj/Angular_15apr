import { Component, input, Input } from '@angular/core';
import { type Emp } from './emp.model';
import { EmpComponent } from "./emp/emp.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [EmpComponent],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  empId:string = '3';
  @Input() id:string = '';
  @Input() role:string = '';
  jobType = input<string>('');  //signal

   empList:Emp[] =[
    {id:'1', name:'John', salary:5000, email:''},
    {id:'2', name:'John', salary:5000, email:''},
    {id:'3', name:'John', salary:5000, email:''},
   ] 

   constructor(private router:Router){
   }

   ngOnInit(): void {
    /*this.route.paramMap.subscribe((param) => {
      this.empId = param.get('empId') || '0';
    });*/

    /*this.empId = this.route.snapshot.paramMap.get('id')?.toString() || '0';
    console.log('empId:', this.empId);

    let role = this.route.snapshot.queryParamMap.get('role');
    let jobType = this.route.snapshot.queryParamMap.get('jobType');
    */
    console.log('id: '+this.id+ '   role:'+ this.role+ ' job:'+ this.jobType());
    const filterEmp = this.empList.filter(e => e.id === this.id);
    if(filterEmp.length ==  0){
      console.log('No employee found with id: '+ this.id);
      //this.router.navigateByUrl('/invalid-employee');
      this.router.navigate(['invalid-employee'], {queryParams: {id: this.id}});
    }
      
   }

}
