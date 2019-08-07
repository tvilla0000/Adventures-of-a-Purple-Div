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





/* ----------- cached elements -------------*/

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');


/* ------------ EVENT LISTENERS ---------*/

document.getElementById('Character').addEventListener('onkeydown', initKeyboard);
document.getElementById('Character').addEventListener('onkeydown', charJump);


// document.getElementById('Character').addEventListener('onkeyup', movCharUp);





/* ------------ FUNCTIONS ---------------*/



function charJump() {
    document.onkeydown = function() {
        if (KEY_UP === true) {
            jump = setInterval(function() {
                document.getElementById('Character').style.bottom = y*25+'px'; y++; 250
            });
        }

    }
}

function initKeyboard() {
    document.onkeydown = function(e) {
e.preventDefault();
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = true;
            setTimeout(function() {
                document.getElementById('Character').style.left = x*15 + 'px';
                x--;
                
                console.log(x);
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
            }

        if (e.keyCode === KEY_DOWN) {
            keyState[3] = true;
        }
        console.log(keyState);
        
    };

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
        }
        if (e.keyCode === KEY_DOWN) {
            keyState[3] = false;
        }
        console.log(keyState);
    };
}

initKeyboard();

// obstacle SetInterval(function(){
// for(i =0; i < maxDistance; i++){    
// style.left += 5(///position)
