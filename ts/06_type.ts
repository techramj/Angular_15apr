

let user:{name:string, age:number, hobbies:string[]} ;

let anotherUser:{name:string, age:number};


type User = {name:string, age:number};
let user1:User ={name:'Jack', age:18};

let newUser:User;


type Employee = {id:number, name:string, salary:number, email?:string};  //?optional

let emp1:Employee = { 
    id:1,
    name:'Jack',
    salary:1000,
    //email:'abc@test.com'
};