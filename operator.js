let a=6;
let b=3;
let c=5;
let d=7;
let e=8;
let f=9;
let g=10;
let h=11;
let i= 12;
let j= 13;
let k=14;
let l="14";
let m=15;
let n=16;
console.log("a=",a," & b=",b);

//Arithmetic operators
console.log("a+b=", a+b);
console.log("a-b=",a-b);
console.log("a*b=", a*b);
console.log("a/b=",a/b);

console.log("a%b=", a%b);//modulus operator
console.log("a**b=", a**b);//exponential operator
a=a+1;//or a++(this is an increament operator)
console.log("a+1=", a);
b=b-1;// or b--(this is decrement operator)
console.log("b-1=", b);
console.log("++a=", ++a);// Pre increment operator

//Assignment operator(+=,-=,*=,/=,%=)
console.log("c+4=", c+=4);//(c+=4) can be written as (c=c+4)
console.log("d-3=", d-=3);//(d-=3) can be written as (d=d-3)
console.log("e*2=",e*=2);//(e*=2) can be written as (e=e*2)
console.log("f/3=", f/=3);//(f/=3) can be written as (f=f/3)
console.log("g%=4=", g%=4);
console.log("h**=2=",h**=2);

//Comparison operators(==, !=, <,>,<=,>=)
console.log("i is equal to 12?=", i==12);
console.log("j is not equal to 13?=", j!=13);
console.log("k===l?", k===l);//It is a strict comparision operator that is used to check value as well as data types

console.log("k is not equale to l?=",k!==l);
console.log("k is greater than 12?=",k>12);
console.log("l is smaller than 12?=",l<12);

//logical operator(&&,||,!)
let cond1= m<n;
let cond2= n<=16;
let o = 17;
let p = 18;
let q = 19;
let r = 20;
console.log("check the condition 1 and 2?=", cond1 && cond2);
console.log("o>p or o<14", (o>p || o<14));// {or operator(//)}
console.log("!(q<r)", !(q<r))

//Ternary operator

let price = 2000;
let result = price <= 5000?"Buy":"Don't buy";
console.log(result);