import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  emp:Emp = {id:0, name:'', salary:0};;

  //constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log('Id= ', this.id);
    const data = this.empService.getEmployeeById(this.id);
    console.log(data);
    if(data){
      this.emp = data;
    }else{
      console.log('not valid emp...');
      //navigate to component employee not found
    }
  }

  updateEmp(){
    console.log('new employee details :', this.emp);
    this.empService.updateEmployee(this.emp);
  }
}
