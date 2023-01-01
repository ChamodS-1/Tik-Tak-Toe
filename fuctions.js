function openInputForm(event){

playerNumber= +event.target.dataset.playerid;
 
 console.log(playerNumber);
nameField.value='';
formSumbission.style.display='block';
overlayBackground.style.display='block';

}

const newUersObject =[

    {

        name:'',
        symbol:'X'

    },

    {

        name:'',
        symbol:'O'

    }

];

function cancleForm(){

    formSumbission.style.display='none';
    overlayBackground.style.display='none';
    errorMessage.textContent='';
    nameField.classList.remove('error');
}

function saveForm(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredValue = formData.get('user-name').trim();
    console.log(enteredValue);

    if(!enteredValue){
        errorMessage.textContent='Enter the valid Name';
        nameField.classList.add('error');
        return;
    }

    const editedPlyer =document.getElementById('player-' + playerNumber + '-dataset');
    editedPlyer.children[1].textContent=enteredValue;

    newUersObject[playerNumber-1].name=enteredValue;
    console.log(newUersObject[playerNumber-1].name);
  
     CloseEvent;
     formSumbission.style.display='none';
     overlayBackground.style.display='none';

}

