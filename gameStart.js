//let mainId =0;
let winnerId=0;

function startnewgame(){



        if(newUersObject[0].name==='' || newUersObject[1].name===''){

            alert('Please enter both players names');
            return;
        
         }

         if(winnerId !==0){

            console.log('pass');
            wonId.style.display='none';

            for( const key of gamePlateAll){

                if( gameLogic[playerRow][Colo] >0){

                    key.style.classList.remove('newColor');
                   return;
            
                }
           
                key.textContent= '';
            }
            return;
         }
        

 gamePlate.style.display='block';
 changePlayerName.textContent =newUersObject[switchPlayerNumber].name;
}

function switchBetweenPlayers(){

    if(switchPlayerNumber===1){

        switchPlayerNumber=0
    }
    else{

        switchPlayerNumber=1
    }
    changePlayerName.textContent =newUersObject[switchPlayerNumber].name;
}

function randomSymbols(event){

    if(event.target.tagName !== 'LI'){
        return;        
    }

    event.target.textContent =newUersObject[switchPlayerNumber].symbol;
    event.target.classList.add('newColor');
    
   
    const playerRow= +event.target.dataset.row -1 ;
    const Colo= +event.target.dataset.col -1;
    console.log(playerRow,Colo);

    if( gameLogic[playerRow][Colo] >0){

        alert('please select another empty cell');
        return;

    }

    gameLogic[playerRow][Colo] =switchPlayerNumber+1;
    console.log(gameLogic);

     winnerId = gameIsOver();
    console.log(winnerId);
   
    if(winnerId !== 0){
        
        checkWinneris(winnerId);
    }
    currentRound++;
    switchBetweenPlayers();

}

