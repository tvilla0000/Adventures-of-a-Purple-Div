/* ---------- VARIABLES --------- */

let KEY_LEFT = 37;

let KEY_RIGHT = 39;

let KEY_UP = 38;

let keyState = [false, false, false]

let x = 2;

let y = 2;






/* ----------- cached elements -------------*/

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');


/* ------------ EVENT LISTENERS ---------*/

document.getElementById('Character').addEventListener('onkeydown', initKeyboard);

// document.getElementById('Character').addEventListener('onkeyup', movCharUp);





/* ------------ FUNCTIONS ---------------*/

function initKeyboard() {
    document.onkeydown = function(e) {
e.preventDefault();
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = true;
            setTimeout(function() {
                document.getElementById('Character').style.right = -x*-10 + 'px';
                --x;
                console.log(x);
            })
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = true;
            setTimeout(function() {
        document.getElementById("Character").style.left = x*10 + 'px';
            ++x;
            console.log(x)
        });
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = true;
            setTimeout(function() {
                document.getElementById('Character').style.bottom = y*20 + 'px';
                ++y;
                console.log(y);
            });
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
        }
        console.log(keyState);
    };
}


// function movCharUp() {
    
//     // let move = parseInt(document.getElementById('Character').style.bottom.replace('px', ''));
//     document.getElementById('Character').innerHTML.bottom = x+20+'px';  
    
// };



initKeyboard();