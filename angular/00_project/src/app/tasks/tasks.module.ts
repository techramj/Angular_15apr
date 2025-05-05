import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../shared/card/card.component";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ],
    imports: [FormsModule, CardComponent],
    providers: [],
    exports: [TasksComponent]
})
export class TasksModule{

}