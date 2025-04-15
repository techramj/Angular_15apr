let person = {
    name: "John",
    age: 30,
    city: "New York",

    display: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
};

//console.log(typeof person, person); 
//console.log(person.name); // Accessing property
//console.log(person["age"]); // Accessing property using bracket notation

displayPersonPropertyValue("name"); // Accessing property using function
displayPersonPropertyValue("age");
displayPersonPropertyValue("city");

function displayPersonPropertyValue(key){
 console.log(`Person's ${key} is ${person[key]}`);
}

let calculation = { '+':'plus', '-':'minus', '*':'multiply', '/':'divide' };
console.log(calculation['+']);