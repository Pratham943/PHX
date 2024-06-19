// let users = ["ram" , " sita" , "hari"];

let colour = {
    value: "red",
    hexValue: "#FF0000",
    rgbValue: {
        Red: 255,
        green: 0,
        blue: 348382,
    },
};

console.log(colour.rgbValue.blue);
colour.rgbValue.blue = 0;
console.log(colour);

let users = [
    {
        name: "Ram",
        permanentAddress: {
            district: "Kathmandu",
            wardNo: 67824,
        },
        temporaryAddress: "GUlmi",
    },
    {
        name: "Sita",
        permanentAddress: {
            district: "Lalitpur",
            wardNo: 16,
        },
        temporaryAddress: "Dolpa",

    },
    {
        name: "shyam",
        permanentAddress: {
            district: "Bhaktapur",
            wardNo: 20,
        },
        temporaryAddress: "Pokahara",

    }];
console.log(users);


users[0].permanentAddress.wardNo = 24;
console.log(users);

users[0].temporaryAddress = {
    district: "Kathmandu",
    wardNo: 24,
};
console.log(users);

users[1].permanentAddress.street = "ason"
console.log(users);

console.log();

console.log(users[0].name,'is from',users[0].permanentAddress,"of wardNo",users[0].permanentAddress.wardNo);