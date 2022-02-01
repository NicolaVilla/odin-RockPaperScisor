function computerPlay(){
    return Math.floor(Math.random()*(4-2+1)+1);
}

function playerPlay(playerInput){
    playerInput = playerInput.toUpperCase()
    switch(playerInput){
        case "ROCK":
            return 1;
        case "PAPER":
            return 2;    
        case "SCISSORS":
            return 3;
    }
}


function playingGame(){
    let playerWins = 0,
    computerWins = 0;
    while (playerWins < 5 && computerWins < 5){

        player = playerPlay(prompt("Turno del jugador ingrese su jugada (ROCK/PAPER/SCISSORS)"));
        computer = computerPlay();

        console.log("Player choose "+showChoose(player))
        console.log("Computer choose "+showChoose(computer))



        if (winStage(player,computer)){
            console.log("GANO EL JUGADOR");
            playerWins++;
        }else if (winStage(computer,player)){
            console.log("GANO LA COMPUTADORA");
            computerWins++;
        }else{
            console.log("Empate")
            console.log("TIE")
        }
        console.log("SCORE: " + playerWins + " / " +computerWins)
    }
    (playerWins == 5) ? console.log("PLAYER WIN!!!!!!") : console.log("COMPUTER WIN!!!!!!")
}


function winStage(player1,player2){
    return ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2));
}

function showChoose(choose){
    switch(choose){
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SISSORS"
    }
}

playingGame();