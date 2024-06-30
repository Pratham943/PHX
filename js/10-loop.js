
function value(input) {
    console.log("double of " + input + " is " + input * 2);
}
let i = 0;
for (i = 1; i <= 10; i++) {
    value(i)

}


// to  do : git hub ma xa

let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
    { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    { name: 'Amit', email: 'amit@gmail.com', password: 'amit4' },
    { name: 'Anjana', email: 'anjana@gmail.com', password: 'anjana5' },
    { name: 'Bijay', email: 'bijay@gmail.com', password: 'bijay6' },
    { name: 'Bikash', email: 'bikash@gmail.com', password: 'bikash7' },
    { name: 'Chhiring', email: 'chhiring@gmail.com', password: 'chhiring8' },
    { name: 'Sabina', email: 'sabina@gmail.com', password: 'sabina28' },

]


function login(email, password) {
    for (index = 0; index <db_users.length; index++) {
        if (db_users[index].email == email && db_users[index].password == password) {
            return console.log(`welcome ${db_users[index].name} `);
        } 
    }
    return console.log(`unable to login`);
}
login("sabina@gmail.com", "sabina28")