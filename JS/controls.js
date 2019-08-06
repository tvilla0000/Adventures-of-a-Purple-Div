/* ---------- VARIABLES --------- */

let KEY_LEFT = 37;

let KEY_RIGHT = 39;

let KEY_UP = 38;

let keyState = [false, false, false]

let x = 0;

let y = 0;




/* ----------- cached elements -------------*/

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');


/* ------------ EVENT LISTENERS ---------*/

document.getElementById('Character').addEventListener('keydown', movCharUp);

document.getElementById('Character').addEventListener('keyup', movCharUp);





/* ------------ FUNCTIONS ---------------*/

function initKeyboard() {
    $(document).keydown(function(e) {

        if (e.keyCode === KEY_LEFT) {
            keyState[0] = true;
            

        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = true;
            setInterval(function() {
                document.getElementById("Character").style.left = x+2+"px";
                x++;
            });
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = true;
            movCharUp();
        }
        console.log(keyState);
        
    });

    $(document).keyup(function(e) {
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = false;
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = false;
            setInterval(function() {
                document.getElementById("Character").style.left = x-2+"px";
                x;
            });
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = false;
        }
        console.log(keyState);
    });
}

function movCharUp() {
    
    let move = parseInt(document.getElementById('Character').style.bottom.replace('px', ''));
    document.getElementById('Character').style.bottom = `${(move || 0) + 15}px`;
    
};


initKeyboard()