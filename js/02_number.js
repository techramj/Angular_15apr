let natural = 10;
let decimal = 10.5;
let hex = 0xA; // hexadecimal
let binary = 0b1010; // binary
let octal = 0o12; // octal
let sixlakh = 6_00_000; // 6 lakh
let sixlakh2 =6e6; // 6 lakh
let x = Infinity; // Infinity

console.log(natural, typeof natural); // 10
console.log(decimal, typeof decimal); // 10.5
console.log(hex); // 10
console.log(binary); // 10
console.log(octal); // 10
console.log(sixlakh); // 600000
console.log(sixlakh2); // 600000
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308   
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(x, typeof x);

let a = 10
let b = 'x';
let c = a* b; // NaN
console.log(c, typeof c); // NaN