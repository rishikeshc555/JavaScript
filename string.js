let str="Development";
console.log("The length of string = ",str.length);//To find the length of string.
console.log(typeof str);//To determine the type.
console.log(str[6]);//To find out the index value of any individual letter of string.

// To find the index position of any specific letter of string-
let char=prompt("Enter any character from the string")
let index=str.indexOf(char);
console.log(index);

//Template literals--(use to print special type of string).

let obj={
    item:"pen",
    price:45
}
console.log(`the cost of ${obj.item} is ${obj.price}`);

//STRINGS METHODS--(These are built in function to manipulate the string).
let string="Computer";
string=string.toUpperCase();//Change string into Upper Case.
console.log("String in upper case=",string);
console.log("String in lower case=",string=string.toLowerCase());//Change string into lower case.

console.log(string.slice(0,4));// returns the character from index 0-3(4th index doesnt included).
console.log(string.concat(str));//join Two strings.
console.log(string.replace("m","n"))//Replace character from the string.
console.log(string.charAt(4));//return the character at index 4.