let newBoard;
let powerSource;

function setup() {
    createCanvas( windowWidth, windowHeight );
    newBoard = new Board( boardTypes.HALF, 50, 50, 300, 900 );
    powerSource = new PowerSource( 50, 400, 900, 300 );
}
  
function draw() {
    background( 0 );
    newBoard.draw();
    powerSource.draw();
}
