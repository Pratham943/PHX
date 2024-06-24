let person = [
    { name: "ram", age: 10, gender: "male" },
    { name: "shyam", age: 18, gender: "male" },
    { name: "sita", age: 15, gender: "female" },
    { name: "hari", age: 20, gender: "male" },
]

let prefix;



for (i = 0; i < person.length; i++) {
    if (person[i].gender == "male") {
        prefix = "Mr."
    } else if (person[i].gender == "female") {
        prefix = "Mrs."
    }
    console.log(`${prefix}${person[i].name} age is ${person[i].age}`);
}


for (i = 0; i < person.length; i++) {
    let prefix = person[i].gender == "male" ? "Mr." : "Mrs."
    console.log(`${prefix}${person[i].name} age is ${person[i].age}`);
}


for (i = 0; i < person.length; i++) {
    let { name, age, gender } = person[i];
    console.log(`${gender == "male" ? "Mr." : "Mrs."}${name} age is ${age}`);
}


function findMultiplication({ number, startFrom, endAt }) {
    for (i = startFrom; i <= endAt; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}
findMultiplication({
    number: 5,
    startFrom: 10,
    endAt: 20,
})

let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    },
    {
        "code": "as",
        "name": "American Samoa",
        "path": "americansamoa"
    },
    {
        "code": "ad",
        "name": "Andorra",
        "path": "andorra"
    },
    {
        "code": "ao",
        "name": "Angola",
        "path": "angola"
    },
    {
        "code": "ai",
        "name": "Anguilla",
        "path": "anguilla"
    },
]
/* 
    find the cods of a specific country 

    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

function findCountryCode(country) {
    for (i = 0; i < countries.length; i++) {
        if (countries[i].name == country){
            console.log(`${countries[i].code} is the country code`);
        }else{
            console.log(`county code not found`);
        }
    }
}

findCountryCode("Nepal")
findCountryCode("Anguilla")