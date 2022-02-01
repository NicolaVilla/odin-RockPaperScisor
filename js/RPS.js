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
    
    player = playerPlay(prompt("Turno del jugador ingrese su jugada (ROCK/PAPER/SCISSORS)"));
    computer = computerPlay();

    console.log("Player choose "+showChoose(player))
    console.log("Computer choose "+showChoose(computer))


    if (winStage(player,computer)){
        console.log("GANO EL JUGADOR");
    }else if (winStage(computer,player)){
        console.log("GANO LA COMPUTADORA");
    }else{
        console.log("Empate")
    }
    
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