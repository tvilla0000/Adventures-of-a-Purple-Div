/*----- constants -----*/ 






/*----- app's state (variables) -----*/
let speed;

let x = 0;

let y = 0;






/*----- cached element references -----*/ 

let char = document.getElementById('Character');

let container = document.getElementById('play-area');

let noTouch = document.getElementById('Obstacle');

let platform = document.getElementById('Platform');




/*----- event listeners -----*/ 

document.getElementById('Character').addEventListener('keydown', movChar);

document.getElementById('Character').addEventListener('keyup', movChar);

/*----- functions -----*/

// function movChar(evt) {

//     $(document).keydown(function(e) {
        
//         if (e.keyCode === KEY_LEFT) {
//             x += -15 + 'px';
//         }
//         else if (e.keyCode === KEY_RIGHT) {
//             x += 15 + 'px';
//         }
//         else if (e.keyCode === KEY_UP ) {
//             y += 15 + 'px';
//         }

//     })

// console.log(x);
// console.log(y);

// };

// movChar();



