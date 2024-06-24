let user = {
    name : "ram" ,
    paidStatus : false ,
    hasScholarship : false ,
    gender : "female" ,
}

if(user.paidStatus){
    console.log(`${user.name} can give exam `);
   
 } else {
   if(user.hasScholarship)  {
    console.log(`${user.name} can give exam `);
   }else{
        if(user.gender == "male"){
            console.log(`mr.${user.name} can give exam `);
        }else{
            console.log(`mrs.${user.name} can't give exam `);
        }
    }    
}


