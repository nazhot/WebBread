let newBoard;

function setup() {
    createCanvas( windowWidth, windowHeight );
    newBoard = new Board( boardTypes.HALF, 50, 50, 300, 150 );
}
  
function draw() {
    background( 0 );
    newBoard.draw();
}
