/*----- constants -----*/ 






/*----- app's state (variables) -----*/

let border = document.getElementById('play-area');




/*----- cached element references -----*/ 





/*----- event listeners -----*/ 



/*----- functions -----*/

function winningLogic() {
    setInterval(function() {
    if (char.getBoundingClientRect().right === endGame.getBoundingClientRect().left && 
    char.getBoundingClientRect().bottom === endGame.getBoundingClientRect().bottom || char.getBoundingClientRect().left === endGame.getBoundingClientRect().right && char.getBoundingClientRect().bottom === endGame.getBoundingClientRect().bottom) {
        alert('Congratulations!! you have escaped!!!');
        resetGame();
        }
    })
};
    
    
    winningLogic();

function youLose(){
    setInterval(function() {
    if (char.getBoundingClientRect().right === noTouch.getBoundingClientRect().left && char.getBoundingClientRect().bottom === noTouch.getBoundingClientRect().bottom ||
    char.getBoundingClientRect().left === noTouch.getBoundingClientRect().right && char.getBoundingClientRect().bottom === noTouch.getBoundingClientRect().bottom ){
        clearInterval(right);
        clearInterval(left);
        alert("You died:( Try again!");
        
        resetGame();
        
        }
    })
};
    
youLose();

function resetGame() {
    location.reload();
    
}






