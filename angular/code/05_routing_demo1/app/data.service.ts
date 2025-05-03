import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService{
    
    private count:number = 0;

    constructor(){
        console.log('DataService constructor called');
    }

    getCount(){
        return this.count;
    }

    setCount(count:number){
        this.count = count;
    }

}