/* ---------- VARIABLES --------- */

let KEY_LEFT = 37;

let KEY_RIGHT = 39;

let KEY_UP = 38;

let KEY_DOWN = 40;

let keyState = [false, false, false, false];

let x = 1;

// let -x;

let y = 2;

let jump;

let character = document.getElementById('Character');

let left;

let right;

let bottom = document.getElementById('Character').style.bottom;






/* ----------- cached elements -------------*/

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');


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
            setTimeout(function() {
                document.getElementById('Character').style.left = x*15 + 'px';
                x--;
            })
        
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = true;
            setTimeout(function() {
                document.getElementById('Character').style.left = x*15 + 'px';
                x++;
                
            });
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = true; 
            // jump = setInterval(charJump, 250);
            charJump();
        }
        
        if (e.keyCode === KEY_DOWN) {
            keyState[3] = true;
        }
        console.log(keyState);
        
    }
};
    onKeyDown();
    
    function onKeyUp() {
    document.onkeyup = function(e) {
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = false;
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = false;
            // document.getElementById('Character').style.left = x*0+'px'; x = 0;
            
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = false;
            // clearInterval(jump);
            stopCharJump();
        }
        if (e.keyCode === KEY_DOWN) {
            keyState[3] = false;
        }
        console.log(keyState);
    };
}

onKeyUp();


function charJump() {
    jump = setInterval(function() { 
        document.getElementById('Character').style.bottom = y+25+'px'; y++; 100
    });
    // setTimeout(jump, 100);
}
// charJump();

function stopCharJump() {
    clearInterval(jump, 200);
    let fall; 
    while(KEY_UP === false) {
        setInterval(function() {
            document.getElementById('Character').style.top = y-25 + 'px'; y--;
        });
        if (kdd0) {

        }
    

    }
}

