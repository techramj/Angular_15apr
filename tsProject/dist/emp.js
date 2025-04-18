"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    fname;
    lname;
    salary;
    constructor(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
    get FullName() {
        return this.fname + " " + this.lname;
    }
    set FullName(name) {
        let names = name.split(" ");
        this.fname = names[0];
        this.lname = names[1];
    }
}
let e1 = new Emp("John", "Doe", 50000);
console.log('fullname:', e1.FullName);
console.log(e1);
e1.FullName = "Jane Smith";
console.log('fullname:', e1.FullName);
