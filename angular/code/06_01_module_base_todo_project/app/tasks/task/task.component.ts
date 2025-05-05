import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../dummy_tasks';

@Component({
  selector: 'app-task',
  //standalone: true,
  //imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input() task!:Task;
   @Output() completeTask = new EventEmitter<string>();


   onCompleteTask(){
    this.completeTask.emit(this.task.id);
   }
}
