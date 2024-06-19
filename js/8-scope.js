let name = "ram";
let age = 11;
let number = 10;

function doSomething() {
    let number = 200;
    age = 14;
    console.log("inside number ", number);
    console.log("inside age ", age);
};

doSomething();
console.log("outside number", number);
console.log("outside age", age);

