class User{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

let user1 = new User("John", 30);

console.log(user1.name)

class AnotherUser{
    constructor(private name:string, public age:number){
        this.name = name;
        this.age = age;
    }
}

let user2 = new AnotherUser("Jane", 25);
console.log(user2.age);



class Employee extends User{

    //salary:number;

    constructor(name:string, age:number, public salary:number){
        super(name, age);
        this.salary = salary;
    }


}