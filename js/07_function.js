function add(a , b){
    return a + b;
}

let res = add(10,'20');
console.log(`The result is ${res}`);

let add2 = function(a,b){
    return a + b;
}
console.log(`The result is ${add2(22,33)}`);

let add3 = (a,b) => {
    return a+b;
};
console.log(`The result is ${add3(22,33)}`);

let square = (a) => {
    return a*a;
}

let square1 = a => {
    return a*a;
};

let sqaure2 = a => a*a; //if only one line of code is there in the function then we can remove the curly braces and return statement

//function to check number is odd or even 

let isEven = num => num%2 === 0;
console.log(isEven(10)); // true
console.log(isEven('hello')); // false
