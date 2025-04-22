import { Component } from "@angular/core";


@Component({
    selector: 'app-comp1',
    standalone: true,
    template: '<p>Component without templateUrl and SytleUrl example!</p>',
    styles: ['p { color: blue; }']
})
export class Comp1Component{

}