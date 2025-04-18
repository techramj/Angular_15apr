foo(); // function hoisting

function foo(){
    console.log("foo");
}

braces(); 
let braces = function(){
    console.log("braces");
}
