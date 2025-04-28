import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_TASKS, Task } from '../dummy_tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "../new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:number;
  @Input({required:true}) name!:string;
  isAddingTask = false;
 

  tasks:Task[] = DUMMY_TASKS;

  get selectedTasks(){
    return this.tasks.filter((task) => task.userid === this.userId);
  }


  onCompleteTask(taskId:string){
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(this.tasks)
  }

  
  onStartAddingTask(){
    this.isAddingTask = true;
  }


  onCancel(){
    this.isAddingTask = false;
  }

  addTask(task:{enteredTitle:string,enteredSummary:string,enteredDate:string}){
    this.tasks.unshift({
      id: Math.random().toString(),
      title: task.enteredTitle,
      summary: task.enteredSummary,
      dueDate: task.enteredDate,
      userid: this.userId
    });
    this.isAddingTask = false;
  }
}
