let newBoard;
let powerSource;
let led;
let resistor;

function setup() {
    createCanvas( windowWidth, windowHeight );
    newBoard = new Board( boardTypes.HALF, 50, 50, 300, 900 );
    powerSource = new PowerSource( 50, 400, 900, 300 );
    led = new LED( 1000, 50, 50, 220, 14, 44 );
    resistor = new Resistor( 1000, 150, 200, 100, 40 );
}
  
function draw() {
    background( 0 );
    newBoard.draw();
    powerSource.draw();
    led.draw();
    resistor.draw();
}
