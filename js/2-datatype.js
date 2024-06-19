// variable
// data types
//  -boolean
//  -text-string
//  -number
//  -undefined
//  -null
// let vs const}-1-variable.js

let screenSize
console.log("screenSize", screenSize);
screenSize = "lrge"
// code here to change lrge to large
screenSize = "large"
console.log("screenSize", screenSize);

//array-collevtion of multiple value element
// syntax: let <arrayName>=["<elements>","<elements>","<elements>"] 
//                            0th idex        1st          2nd

// code here to change is ornge to orange
let fruits = ["apple", "ornge", "kiwi", "banana"];
console.log(fruits);

fruits[1] = "orange";
console.log(fruits);

let num = [2, 4, 6, 8, 10, "tweleve"];
console.log(num)
num[5] = 12;
console.log(num);

let courses = ["science", "math", "social", "english", "Nepali", 'javaScript', 'PHP'];
console.log(courses);
courses[3] = "MERN";
console.log(courses);


let users = ["ram","sita","gita"];
console.log(users);
// todo 1: we need name as well as ph.no
// todo 2: add shyam at last

let user =[
    { name: "ram", phone: "123-456-7890" },
    { name: "sita", phone: "234-567-8901" },
    { name: "gita", phone: "345-678-9012" },

]
console.log(user);

user[3] = { name:"shyam", phone: " 678-891-011"};

console.log(user);

