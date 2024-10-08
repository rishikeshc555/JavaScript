const age=["17","15","67","45"]
let result= age.filter(checkAge);
function checkAge(age){
    return age<=18;
} 
console.log(result);