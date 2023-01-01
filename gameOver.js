function gameIsOver(){

    //checking the rows
for( let i=0; i<3 ;i++){

   if (gameLogic[i][0] >0 && 
       gameLogic[i][0] === gameLogic[i][1] &&
       gameLogic[i][1] === gameLogic[i][2]){

        return gameLogic[i][0];

    }
}

    //checking the colums
for( let i=0; i<3 ;i++){
    
   if  (gameLogic[0][i] >0 && 
        gameLogic[0][i] === gameLogic[1][i] &&
        gameLogic[0][i] === gameLogic[2][i]){

        return gameLogic[0][i];

    }
}

// top left to bottom right
if  (gameLogic[0][0] >0 && 
    gameLogic[0][0] === gameLogic[1][1] &&
    gameLogic[1][1] === gameLogic[2][2]){

    return gameLogic[0][0];

}

// top right to bottom left

if  (gameLogic[2][0] >0 && 
    gameLogic[2][0] === gameLogic[1][1] &&
    gameLogic[1][1] === gameLogic[0][2]){

    return gameLogic[2][0];

}

    if(currentRound === 9){

            return -1;
    }

    return 0;
}

