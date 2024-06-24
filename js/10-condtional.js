let user = {
    name : "ram" ,
    paidStatus : false ,
    hasScholarship : true ,
    gender : "male" ,
    hasMadeAttandence : true,
    email : "ram@am.com",
    password : "password",
}

let genderPrefix = "Mr."
if (user.gender == "female" ||user.gender == "Female"){
    genderPrefix = "Mrs."
}else if (user.gender == "others"){
    genderPrefix == "Mr/Mrs."
}
if((user.paidStatus || user.hasScholarship) && user.hasMadeAttandence){
    console.log(`${genderPrefix}${user.name} can give exam `);
 } else {
    console.log(`${genderPrefix}${user.name} can't give exam `);  
}

function login(email,password){
 if(user.email == email && user.password == password){
    console.log(`${user.name} has logged in`);
 }else{
    console.log(`wrong combination of email and password`);
 }
}
login("ram@am.com","password")

