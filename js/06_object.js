class User{
    name;
    age ;

    constructor(name, age) {
        this.name = name ;
        this.age = age ;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

}

let user = new User("sam", 25);
console.log(typeof user, user); // Object type
user.display(); // Accessing method