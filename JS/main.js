/*----- constants -----*/ 






/*----- app's state (variables) -----*/
let speed;

let posx = 0;

let posy = 0;






/*----- cached element references -----*/ 

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');




/*----- event listeners -----*/ 

document.getElementById('Character').addEventListener('keydown', movCharDown);

document.getElementById('Character').addEventListener('keyup', function() {movCharDown});

/*----- functions -----*/









function movCharDown() {
    // if (KEY_UP) {
    let move = parseInt(document.getElementById('Character').style.top.replace('px', ''));
    document.getElementById('Character').style.top = `${(move || 0) + 15}px`;
    // }
};

// function movChar() {
//     if (KEY_UP)
// }

// movCharDown();


