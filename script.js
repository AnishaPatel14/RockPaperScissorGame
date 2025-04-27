let userScore = 0;
let compScore = 0;

let compScoreBoard = document.getElementById('comp-score');
let userScoreBoard = document.getElementById('user-score');

let msg = document.querySelector('#msg');

const GenCompChoice = ()=>{
    //choose one of them : rock | paper | scissor
    const options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = ()=>{
    console.log("DRAW");
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "#30639f";
}

const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = "You Win! " + `${userChoice} beats ${compChoice}`;
        userScoreBoard.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        msg.innerText = "You Lose! " + `${compChoice} beats ${userChoice}`;
        compScoreBoard.innerText = compScore;
        msg.style.backgroundColor = "red";
    }   
}

const playGame = (userChoice)=>{
    console.log("user ki choice = ", userChoice);
    const compChoice = GenCompChoice();
    console.log("computer ki choice = ", compChoice);

    if(userChoice === compChoice) {
        //game draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor"? false: true;
        } 
        else if(userChoice==="scissor"){
            userWin = compChoice==="rock"?false: true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
}

const choices = document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute('id');
        // console.log("choice is clicked ", userChoice);

        //actual game
        playGame(userChoice);
    })
});


