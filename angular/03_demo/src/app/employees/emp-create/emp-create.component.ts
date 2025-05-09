import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-create.component.html',
  styleUrl: './emp-create.component.css'
})
export class EmpCreateComponent {
 
  name:string ='';
  salary:number =0;
  email:string = '' ;

  empService = inject(EmpService);
  router = inject(Router);


  addEmp(){
    this.empService.addEmployee({name:this.name, salary:this.salary, email:this.email})
    .subscribe(data=>{
      this.router.navigateByUrl("/employees");
    })
  }
}
