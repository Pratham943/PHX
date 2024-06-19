function value(input) {
    console.log("double of " + input + " is " + input * 2);
}
value(2)
value(5)
value(1000000)

function sum(num1st, num2nd) {
    console.log(`${num1st} + ${num2nd} = ${num1st + num2nd}`);
};
sum(20, 40)

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
function usersInfo(index) {
    console.log(`${users[index].name}'s phone no is ${users[index].phoneNo} `);
}
usersInfo(0);

function displayUserInfo(user) {
    console.log(`${user.name}'s phone no is ${user.phoneNo} `);
};

displayUserInfo(users[0]);
displayUserInfo(users[1]);
displayUserInfo(users[2]);
displayUserInfo({
    name: "Ram",
    phoneNo: 9841219765,
},)


let gender = ["male", "female", "others"];
gender.length //3
Math.random() ;// 0 to 1
Math.floor // 1.2 => 1

let mathIndex = Math.floor()
console.log(mathIndex);
console.log(gender[mathIndex]);


