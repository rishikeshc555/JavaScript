const employee={
    fullName:"Ramesh Singh",
    work:"Backend",
    experience_in_year: "2",
    age:24,
}
employee["age"]=56;/*As we know that we cannot change the value of const variable but we can change the keys value of const variable name*/
employee["fullName"]= "Ramesh Gupta";
console.log(employee);
console.log(typeof employee);
