//if statement
let age = 45;
if(age<18){
    console.log("Is not applicable for driving licence")
} 
else {
    console.log("Can apply for driving licence")
}
//else-if statement
let mark = prompt("Enter the mark(0-100");
let grade;
if(mark<100 && mark>=90){
    grade="A";
}
else if(mark>70 && mark<=89){
    grade="B";
}
else if(mark>60 && mark<=69){
    grade="C";
}
else if(mark>50 && mark<=59){
    grade="D";
}
else if(mark>0 && mark<=49){
    grade="F";
}
console.log("According to your mark, your grade is",grade);