function checkWinneris(winnerId){

    if(winnerId>0){

        winnerName.textContent= newUersObject[winnerId-1].name;
        gamePlate.firstElementChild.textContent=newUersObject[winnerId-1].name +' '+ 'is won!';
        wonId.style.display='block';

    }
    else{

        wonId.firstElementChild.textContent='It \'s Draw!';
        gamePlate.firstElementChild.textContent='No Winner!'
        wonId.style.display='block';
    }

}