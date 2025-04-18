"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user1 = new User("John", 30);
console.log(user1.name);
class AnotherUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
let user2 = new AnotherUser("Jane", 25);
console.log(user2.age);
class Employee extends User {
    salary;
    //salary:number;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.salary = salary;
    }
}
