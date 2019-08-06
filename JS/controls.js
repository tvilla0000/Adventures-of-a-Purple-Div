/* ---------- VARIABLES --------- */

let KEY_LEFT = 37;

let KEY_RIGHT = 39;

let KEY_UP = 38;

let keyState = [false, false, false]



/* ------------ EVENT LISTENERS ---------*/







/* ------------ FUNCTIONS ---------------*/

function initKeyboard() {
    $(document).keydown(function(e) {

        if (e.keyCode === KEY_LEFT) {
            keyState[0] = true;
        

        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = true;
        
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = true;
            let move = parseInt(document.getElementById('Character').style.bottom.replace('px', ''));
    document.getElementById('Character').style.bottom = `${(move) + 15}px`;
        }
        console.log(keyState);
        
    });

    $(document).keyup(function(e) {
        if (e.keyCode === KEY_LEFT) {
            keyState[0] = false;
        }
        if (e.keyCode === KEY_RIGHT) {
            keyState[1] = false;
        }
        if (e.keyCode === KEY_UP) {
            keyState[2] = false;
        }
        console.log(keyState);
    });
}

initKeyboard()