let users = [
  { name: "ram", age: 11 },
  { name: "hari", age: 12 },
  { name: "shyam", age: 14 },
  { name: "sita", age: 18 },
  { name: "gita", age: 20 },
];
for (i = 0; i < users.length; i++) {
  console.log(`${users[i].age} = ${users[i].name}`);
}
/* array function
   push
    forEach*/

users.forEach((index) => {
  console.log(`${index.name} = ${index.age}`);
});

let children = [];
let adults = [];

users.forEach((element) => {
  if (element.age <= 18) {
    children.push(element.name);
  } else {
    adults.push(element.name);
  }
});
console.log(children);
console.log(adults);

let child = users.filter((element) => {
  if (element.age <= 18) {
    return true;
  }
});

let adult = users.filter((element) => {
  if (element.age > 18) {
    return true;
  }
});

console.log(adult);
console.log(child);

/* map function*/
