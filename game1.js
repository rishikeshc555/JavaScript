//Guess the number game
let num=45;
let Usernum=prompt("Enter the number you want to guess");

while(Usernum!=num){
    Usernum=prompt("You have entered wrong guessing number, please enter the new number that you want to guess");
}
console.log("Awesome, you have guess the correct number that is=",num);