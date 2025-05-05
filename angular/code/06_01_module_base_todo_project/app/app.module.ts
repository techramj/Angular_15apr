import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent

    ], //where we register our components
    imports: [BrowserModule, FormsModule], //where we register our modules
    providers: [], //where we register our services
    bootstrap: [AppComponent] //where we register our root component
})
export class AppModule{

}