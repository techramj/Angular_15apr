# Angular
Important cli command
1. create new project
```
ng new <project_name>
```

2. start the project
```
ng serve
//or
npm start
```

3. create new component
```
ng generate component <component-name>
ng g c <component-name>
ng g c <component-name> --skip-tests  
```

# Component

```
@Component({
    selector: 'app-user',
    standalone: true,
    imports: [Comp1Component],
    templateUrl: './user.component.html',  //template : 'small html code '
    styleUrls: ['./user.component.css']    // styles :[] 
})

```


## Selector

calling in another component
```
<app-user></app-user> //element selector

<div app-user ></div> //property selector
<p app-user></p>  //property selector

<div class="app-user"> </div> //class selector
```

### 1 Element selector
```
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',  //template : 'small html code '
    styleUrls: ['./user.component.css']    // styles :[] 
})
export Class UserComponent{

}

```


### 2 Property selector
```
@Component({
    selector: '[app-user]',
    standalone: true,
    templateUrl: './user.component.html',  //template : 'small html code '
    styleUrls: ['./user.component.css']    // styles :[] 
})
export Class UserComponent{

}
```


### 3 class selector
```
@Component({
    selector: '.app-user',
    standalone: true,
    templateUrl: './user.component.html',  //template : 'small html code '
    styleUrls: ['./user.component.css']    // styles :[] 
})
export Class UserComponent{

}
```

## Binding

```
    html  <------------------------------- ts
            {{string interpolation}} [propertyBinding]

    html  -------------------------------> ts
           (event) ="function(){}"

    html  <-------------------------------> ts
                [(ngModel)]
```


## applying css
```
[ngClass]="{'className1': true, 'className2':true}"
[ngClass] ='[...list of classes]'

[ngStyle] ="{key:value}"
key = cssProperties(eg: background-color, text-align)
value= cssProperties value(eg; 'red','center')
```


# Routing



# db 
1. create the folder db
2. initalize the project as a node js project
```
npm init -y
```

3. add the json file emp.json and user.json

emp.json
```
{
    "employees" : [
        {"id":1, "name":"John", "salary":5000, "email":"test1@gmail.com"},
        {"id":2, "name":"Sam", "salary":6000, "email":"test2@gmail.com"},
        {"id":3, "name":"Jessica", "salary":15000, "email":"test3@gmail.com"},
        {"id":4, "name":"Vijay", "salary":45000, "email":"test4@gmail.com"},
        {"id":5, "name":"Ajay", "salary":35000, "email":"test5@gmail.com"}
    ]
}
```

user.json
```
{
    "users" : [
        {"id":101, "name":"John", "age":21, "email":"test1@gmail.com"},
        {"id":102, "name":"Sam", "age":22, "email":"test2@gmail.com"},
        {"id": 103, "name":"Jessica", "age":20, "email":"test3@gmail.com"},
        {"id": 104, "name":"Vijay", "age":19, "email":"test4@gmail.com"},
        {"id": 105, "name":"Ajay", "age":32, "email":"test5@gmail.com"}
    ]
}
```

4. install json server
```
npm install -g json-server
```