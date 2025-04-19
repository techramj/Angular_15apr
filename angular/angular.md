# Angular


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


### 3 Property selector
```
@Component({
    selector: '.app-user',
    standalone: true,
    templateUrl: './user.component.html',  //template : 'small html code '
    styleUrls: ['./user.component.css']    // styles :[] 
})
export Class UserComponent{

}
