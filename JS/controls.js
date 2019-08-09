/* ---------- VARIABLES --------- */

let KEY_LEFT = 37;

let KEY_RIGHT = 39;

let KEY_UP = 38;

let KEY_DOWN = 40;

let keyState = [false, false, false, false];

let x = 1;

let y = 1;

// let y;

let jump;



// let character = document.getElementById('Character');

let left;

let right;

let fall;







/* ----------- cached elements -------------*/

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('p1');

let endGame = document.getElementById('Endgame');

let ground = document.getElementById('groundlevel');




/* ------------ EVENT LISTENERS ---------*/

document.getElementById('Character').addEventListener('onkeydown', onKeyDown);
document.getElementById('Character').addEventListener('onkeyup', onKeyUp);


// document.getElementById('Character').addEventListener('onkeyup', movCharUp);





/* ------------ FUNCTIONS ---------------*/






function onKeyDown() {
    document.onkeydown = function(e) {
        e.preventDefault();
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = true;
            
        charLeft();
        
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = true;
            

            charRight();
            
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = true; 
            
            charJump();
            
        }
        
        if (e.keyCode === KEY_DOWN) {
            keyState[3] = true;
            pullCharDown();
        }
        console.log(keyState);
        
    }
};

    onKeyDown();
    
    function onKeyUp() {
    document.onkeyup = function(e) {
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = false;
            stopCharLeft();
        
            
            
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = false;
            stopCharRight();
            
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = false;
            pullCharDown();
            
            
            
        }
        if (e.keyCode === KEY_DOWN) {
            keyState[3] = false;
            stopFall(); 
        }
        console.log(keyState);
    };
}

onKeyUp();

function charJump() {
    jump = setInterval(function() {
        y = 100;
        char.style.bottom = y+200+'px'; y++;
        
    })
};

// function stopCharJump() {
//     clearInterval(jump);
//     }

function pullCharDown() {
    clearInterval(jump);
fall = setInterval(function() {
    char.style.bottom = y+200+'px'; y--;
    })
}

function charLeft() {
    left = setInterval(function() {
        
        char.style.left = x+25+'px';
        x--;})
};

function stopCharLeft() {
    clearInterval(left);
};

function charRight() {
    right = setInterval(function() {
        document.getElementById('Character').style.left = x+25+'px';
        x++;})
    };

function stopCharRight() {
    clearInterval(right);
}


function stopFall() {
    
    setInterval(function() {
        if ( char.getBoundingClientRect().bottom === ground.getBoundingClientRect().top) {
            clearInterval(fall);
            // clearInterval(fall);
        }
    })
    
};

stopFall();

function landPlat() {
    setInterval(function() {
        if ( char.getBoundingClientRect().bottom === platform.getBoundingClientRect().top ) {
            clearInterval(fall);
        }
        
    });
}
landPlat();