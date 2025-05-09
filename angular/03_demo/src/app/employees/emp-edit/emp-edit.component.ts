import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../emp.model';
import { EmpService } from '../emp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})
export class EmpEditComponent implements OnInit{
  @Input() id:number = 0;
  empService = inject(EmpService);
  router = inject(Router);

  emp:Emp = {id:0, name:'', salary:0};;

  //constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log('Id= ', this.id);
    let emp = this.empService.getEmployeeById(this.id).subscribe(data=>{
      this.emp = data;
    });
  }

  updateEmp(){
    this.empService.updateEmployee(this.emp).subscribe(data=>{
      this.router.navigateByUrl("/employees");
    });
  }
}
