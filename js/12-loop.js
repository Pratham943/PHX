let number = [1, 2, 3, 4, 5, 6];
let doubleNumber = [];


// for (let i = 0; i < number.length; i++) {
//     let num = number[i] * 2;
//     doubleNumber[i] = num;
// }
// console.log(doubleNumber);

for (let i = 0; i < number.length; i++) {
    doubleNumber.push(number[i] * 2);
}
console.log(doubleNumber);


/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 


*/
const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
let user = []
function fakedatabase() {
    for (let i = 0; i < nepaliNames.length; i++) {
        user.push({
            name: `${nepaliNames[i]}`,
            email: `${nepaliNames[i]}@gmail.com`,
            password: `${nepaliNames[i].toLowerCase()}${[i]}`,
        })
    }

}
fakedatabase();
console.log(user);
/* sum(1,2)
rest operator
*/

function SubmitEvent(...rest) {
    let output = 0;
    for (i = 0; i < rest.length; i++) {
        
        output = output + rest[i] ;
        
    }
    return output;
}
console.log(SubmitEvent(1, 2, 3, 4, 5));

const fakeUsers = nepaliNames.map((element,index)=>({
    name: `${nepaliNames[i]}`,
    email: `${nepaliNames[i]}@gmail.com`,
    password: `${nepaliNames[i].toLowerCase()}${[i]}`,
}))