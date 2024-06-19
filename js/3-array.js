// let course1 = "mern";
// let course2 = "qa";
// let course3 = "python";

// let courses = "mern,qa,python,..."

let courses = [
    { name: "mern", startDate: "01/01/2080", duration : "2 months" },
    { name: "python", startDate: "02/01/2081", duration : "2 months"},
    { name: "javaScript", startDate: "03/01/2081", duration : "2 months"},
];

// add machine learning in courses
courses[3] = {name:"machine learning", date: "04/01/2081"}


console.log(courses)

// object
/* 
   let <objName> ={
        <key> = value;
   }
*/
let projector = {
    brand: "viewsonic",
    color: "white",
    price: 50000,
    height: 15,
    width: 15,
    unit: "cm",
};

console.log(projector);

let colour = {
    value: "red",
    VAlue: "Red",
    hexValue: "#FF0000",
    RGBValue: "ntg"
};
console.log(colour);
colour.VAlue="red";
console.log("colour.VAlue",colour);

let colours = [
    { name: "red", hex: "#FF000", rgb: "rgb(255,0,0)" },
    { name: "green", hex: "#FG000", rgb: "rgb(0,225,0)" },
    { name: "blue", hex: "#FH000", rgb: "rgb(0,0,225)" },
];

console.log(colours);



