## arrow function
1. arrow function can only be fefined using let, const, var.
2. if arrow function have one argument, then parenthesis not required.


# Typescript
1. TS is JS with syntax for types. it is JS superset.

## declaratiion
```
let a = 10;  //  typeof is number
let x;  //typeof x is any

```

## union type
```
let age: number | string;
```

## declare array
```
let arr1 = ['10','20','30'];
let arr2:number[] =  [1,2,3];
let arr3:Array<number> = [1,2,3];
let arr4:Array<string | number> = [1,2,3,'4','5'];
```

## service
```
In angular, a service is a class that groups and shares the data, functions, business logic b/w the component.
communicate between components or API

```


## when to use the services
```
where common logic such as fetching data, validation, logging

```


## Routing
```
/employees/1/details/ 
['employees', id, 'details']


/emp-list/{id} => {id} => path variabe (d++, java, dot.net)
/emp-list/:id

projects
projects/todo
```

### module
1. standalone project from angular 17 and before it is module based
```
ng new <project-name> 
```

2. module based project
```
ng new <project-name> --standalone false
```

## step to migrate the standalone project 
1. create app.module.ts file
```
@NgModule({
    declarations: [], //where we register our components
    imports: [], //where we register our modules
    providers: [], //where we register our services
    bootstrap: [AppComponent] //where we register our root component
})
export class AppModule{

}
```
2. migrate app component from standalone to module based 
```
@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
```