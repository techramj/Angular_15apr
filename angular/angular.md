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