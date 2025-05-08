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
cd db
npm init -y
```

3. add the json file =>  emp.json and user.json

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

5. replace the below  in package.json
```
{
  "name": "db",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "npx json-server --watch emp.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```
6. start the server
```
npm start
```
OR
```
npx json-server --watch emp.json
```

7. install thunderbird in visual studio code

8. we can perform crud operation using rest api
```
1XX  informational
2XX  sucess
    200 OK
    201 created
    204 no content
3XX redirection
4XX client error
    400 bad request
    401 unauthorized
    403 forbidden
    404 page not found
5XX  server side error
    500 internal server error
    503: service unavailable
    504: geteway timeout


    client  -------request----------->  server
          <---------response---------            
```

### HTTP method
1. GET   IDOMPOTENT
2. POST
3. PUT
4. DELETE

5. OPTIONS
6. TRACE
7. PATCH

#### request for emp
1. fetch all the records
```
GET http://localhost:3000/employees
```

3. fetch emp details by id
```
GET http://localhost:3000/employees/:id
GET http://localhost:3000/employees/{id}
```

3. add the empl
```
POST: http://localhost:3000/employees

body:
{
  "id": "string",
  "name": "string",
  "salary": number,
  "email": "string"
}

```

4. update emp
```
PUT: http://localhost:3000/employees/:id

body:
{
  "id": "string",
  "name": "string",
  "salary": number,
  "email": "string"
}

```

5. delete emp
DELETE: http://localhost:3000/employees/:id



# observables
```
Observable are a core feature of programming that handle asynschornous operations and data stream.

synchronous vs asynchronous

fun1() 1 min
fun2() 1 min
fun3() 1 min

```

### how can we write asynchronous task
```
Promise
Observable
```


#### observable design patter
```

Observable                     Observer                     Handler

Even Emitter                  Event Listener                EventHandler
                                subcriber()


next                               .subscribe()              .next() 
error                                                         .error()
completion                                                     .complete()

```

1. create observable
```
observable1  = new Observable(); //not emit any data

```

2. pass the callback function as an observer
```
observable1  = new Observable((observer)=>{
    observer.next('data.....');
}); 

```

3. observer
```
observable1.subscribe((data)=>{});

```



````

 1   2    3   4
```