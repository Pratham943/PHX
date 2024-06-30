/* arrow function */
let myFunction = (a, b) => { 
    return a * b
};
console.log(myFunction(2,2));

const hello = () => {
    return "Hello World";
}
console.log(hello());

const double = (input) => {
    return input * 2;
}
console.log(double(199));

const diff = (input) => {return output = input / 2;}
console.log(diff(100));


/* asnynchoronous , timer  */

const showPopUp = () =>{
    console.log("POPUP");
}

setTimeout(showPopUp,5000)

