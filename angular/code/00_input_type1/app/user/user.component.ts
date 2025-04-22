import { Component, Input } from "@angular/core";
import { Comp1Component } from "../comp1/comp1.component";


@Component({
    selector: 'app-user',
    standalone: true,
    imports: [Comp1Component],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
 export class UserComponent{
    @Input() name: string = "";
    @Input() age: number = 0;
    @Input() nationality: string = "";
}