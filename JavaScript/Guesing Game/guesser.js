// GUESSING GAME

//ScoreBoard
let won = 0;
let lost = 0;


function guess (){

//User Input

    let unum = parseFloat(prompt("Enter Your Number(1-5): "));

//Random Number Generator

    num = Math.floor(Math.random()*5 + 1);
    
//Checker
    if (unum == num){
        document.querySelector(".result").innerHTML = "You Guessed Right";
        won++
    }
    
    else{
        document.querySelector(".result").innerHTML = "Boo, You Guessed Wrong.</br>Right Number was:" + num ;
        lost++;
    }
//Dynamic Scoreboard
    document.querySelector("#score").innerHTML = "</br>"+ "Number of Wins: " + won + "</br>" + "Number of Loses: " + lost
}




