let users = [
    {
        name: "Ram",
        phoneNo: 9841219765,
    },
    {
        name: "Sita",
        phoneNo: 9841276541,
    },
    {
        name: "shyam",
        phoneNo: 9841219341,
    }];

let gender = ["male", "female", "others"];
gender.length //3
Math.random();// 0 to 1
Math.floor // 1.2 => 1

let mathIndex = Math.floor(Math.random() * gender.length)
console.log(mathIndex);
console.log(gender[mathIndex]);

let religions = ["hindu", "buddhist", "christian", "muslim"];
let ages = ["10","20","30","40","50"];

let religionsIndex = Math.floor(Math.random() * religions.length);
console.log(religions[religionsIndex]);


function getRandomValue(arr){
    let value = arr[Math.floor(Math.random() * arr.length)];
    return value;
   
}

function religious(reli) {
    // users[reli].religion = religions[Math.floor(Math.random() * religions.length)]
    // // users[reli].religion = religions[users[reli].age]
    // users[reli].age = Math.floor(Math.random() * 100);

    users[reli].religion = getRandomValue(religions);
    users[reli].age = getRandomValue(ages);
   
    console.log(users);
}

religious(0);
religious(1);
religious(2);

function sum(no1,no2){
 let result = no1 + no2;
 return result;
}
console.log(sum(12,12));
