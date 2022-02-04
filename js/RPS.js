


// function computerPlay(){
//     return Math.floor(Math.random()*(4-2+1)+1);
// }

// function playerPlay(playerInput){
//     playerInput = playerInput.toUpperCase()
//     switch(playerInput){
//         case "ROCK":
//             return 1;
//         case "PAPER":
//             return 2;    
//         case "SCISSORS":
//             return 3;
//     }
// }



// function playingGame(playerChoose){
//     let playerWins = 0,
//         computerWins = 0;
    

//     player = playerPlay(playerChoose);
//     computer = computerPlay();

//     console.log("Player choose "+showChoose(player))
//     console.log("Computer choose "+showChoose(computer))



//     if (winStage(player,computer)){
//         console.log("GANO EL JUGADOR");
//         playerWins++;
//     }else if (winStage(computer,player)){
//         console.log("GANO LA COMPUTADORA");
//         computerWins++;
//     }else{
//         console.log("Empate")
//         console.log("TIE")
//     }
//     console.log("SCORE: " + playerWins + " / " +computerWins)
//     }
//     (playerWins == 5) ? console.log("PLAYER WIN!!!!!!") : console.log("COMPUTER WIN!!!!!!")



// function winStage(player1,player2){
//     return ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2));
// }

// function showChoose(choose){
//     switch(choose){
//         case 1:
//             return "ROCK"
//         case 2:
//             return "PAPER"
//         case 3:
//             return "SISSORS"
//     }
// }

// VALORES INICIALES DE JUEGO




let playerWins = 0,
    computerWins = 0;

const playerImg = document.getElementById("player-score-img");
const computerImg = document.getElementById("computer-score-img");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const roundWinner = document.getElementById("round-winner");
const roundMesagge = document.getElementById("round-mesagge");
const endBox = document.getElementById("end-box");
const endMessage = document.getElementById("end-message");
const endButton = document.getElementById("end-button");



endBox.classList.toggle("invisible");
endBox.classList.toggle("invisible");

// BOTONES Y SUS RESPECTIVAS FUNCIONES

document.getElementById("buttonRock").addEventListener('click', btnRock);

document.getElementById("buttonPaper").addEventListener('click', btnPaper);

document.getElementById("buttonScissor").addEventListener('click', btnScissor);

function btnRock(){
    playerImg.src = "./img/rock.jpg";
    playingGame(1);
}

function btnPaper(){
    playerImg.src = "./img/paper.jpg";
    playingGame(2);
}

function btnScissor(){
    playerImg.src = "./img/scissors.jpg";
    playingGame(3);
}



// Funcion Inicial

function playingGame(player){
    computer = computerPlay();

    if (winStage(player,computer)){
        playerWins++;
        playerScore.textContent = "Player: "+ playerWins;
        roundWinner.textContent = "YOU WON!";
    }else if (winStage(computer,player)){
        computerWins++;
        computerScore.textContent = "Computer: " + computerWins;
        roundWinner.textContent = "YOU LOST UnU"
    }else{
        roundWinner.textContent = "ITS A DRAW";
    }

    if (playerWins == 5) win("PLAYER");
    if (computerWins == 5 ) win("COMPUTER");
}


//ELECCION DE LA COMPUTADORA
function computerPlay(){
    let computer = Math.floor(Math.random()*(4-2+1)+1);
    switch(computer){
        case 1:
            computerImg.src = "./img/rock.jpg";
            break;
        case 2:
            computerImg.src = "./img/paper.jpg";
            break;
        case 3:
            computerImg.src = "./img/scissors.jpg"
            break;
    }
    return computer;

}


//FUNCION PARA VER SI GANO JUGADOR O COMPU

function winStage(player1,player2){
    return ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2));
}


function win(winner){
    (winner == "PLAYER") ? endMessage.textContent = "YOU WON!" : endMessage.textContent = "YOU LOST...";
    endBox.classList.toggle("invisible");
    endButton.addEventListener('click',restartGame);
    
}

function restartGame(){
    playerWins = 0;
    computerWins = 0;

    playerImg.src= "./img/question.png";
    computerImg.src = "./img/question.png";

    roundWinner.textContent = "Choose your weapon";
    roundMesagge.textContent = "First to score 5 wins";

    endBox.classList.toggle("invisible");

    playerScore.textContent = "Player: " + playerWins;
    computerScore.textContent = "Computer: " + computerWins;

}