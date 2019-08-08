/*----- constants -----*/ 






/*----- app's state (variables) -----*/

const rect = char.getBoundingClientRect();

const rect2 = endGame.getBoundingClientRect();






/*----- cached element references -----*/ 





/*----- event listeners -----*/ 



/*----- functions -----*/

function winningLogic() {
    setInterval(function() {
    if (char.getBoundingClientRect().right === endGame.getBoundingClientRect().left && 
    char.getBoundingClientRect().bottom === endGame.getBoundingClientRect().bottom || char.getBoundingClientRect().left === endGame.getBoundingClientRect().right && char.getBoundingClientRect().bottom === endGame.getBoundingClientRect().bottom) {
        alert('Congrats');
        }
    })
};
    
    
    winningLogic();

function youLose(){
    setInterval(function() {
    if (char.getBoundingClientRect().right === noTouch.getBoundingClientRect().left && char.getBoundingClientRect().bottom === noTouch.getBoundingClientRect().bottom ||
    char.getBoundingClientRect().left === noTouch.getBoundingClientRect().right && char.getBoundingClientRect().bottom === noTouch.getBoundingClientRect().bottom){
        alert("You Died, Try again!");
    }
    })
};
    
youLose();

