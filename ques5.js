//Enter the full name from user and print username with "@" and "length of full name".

//Way 1-
let str1="@";
let str2=prompt("Enter the user name");
console.log(`username= ${str1.concat(str2)}${str2.length}`);

//Way 2-
let fullName=prompt("Enter the full name");
let username= "@"+fullName+fullName.length;
console.log("username=", username);