console.log("Hello world")
var a=34;  /*Variable can be re-declared & updated. A global scope variable.*/
var b=34;
var c="Cascading"
console.log(a+b)
console.log(typeof a, typeof b, typeof c)
console.log('Welcome to JavaScript');
console.log("New journey")
price=199.50;
console.log(price);
isPresent=true;
isAbsent=false;
console.log(isPresent);
console.log(isAbsent);
let age=26; /*let : Variable cannot be re-declared but can be updated. A block scope variable.*/
age=34;
age=45;
console.log(age);
const PI=3.14;
console.log(PI); /*const : Variable cannot be re-declared or updated. A block scope variable.*/

{
    let age=18;
    console.log(age);
}
{
    let age=56;
    console.log(age);
    console.log(typeof age);
}