import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  //standalone: true,
  //imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() addTask = new EventEmitter<{enteredTitle:string,enteredSummary:string,enteredDate:string}>();
  enteredTitle: string = '';
  enteredSummary:string ='';
  enteredDate:string = '';

  onSubmit(){
    let task ={enteredTitle:this.enteredTitle, 
      enteredSummary:this.enteredSummary, 
      enteredDate:this.enteredDate};
    console.log(task);
    this.addTask.emit(task);
  }


  onCancel(){
    this.cancel.emit();
  }
  

}
