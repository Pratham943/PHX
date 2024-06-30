/*
TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 
_________________________________________________________________________________________________

You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function
___________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }
*/
let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function eton(input){
    let output ="";
    input = input.toString();
    let inputArray = input.split("");
    for(index = 0 ; index < inputArray.length; index++){
        let number = inputArray[index]
        output = output + nepali_digits[number]
    }

    return output
}
console.log(eton(111));