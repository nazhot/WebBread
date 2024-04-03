let simulation;

function setup() {
    createCanvas( windowWidth, windowHeight );
    simulation = new Simulation();
    simulation.addBoard( new Board( boardTypes.HALF, 50, 50, 300, 900 ) );
    simulation.addPowerSource( new PowerSource( 50, 400, 900, 300 ) );
    simulation.addComponent( new LED( 1000, 50, 50, 220, 14, 44 ) );
    simulation.addComponent( new Resistor( 1000, 150, 200, 100, 40 ) );
}
  
function draw() {
    background( 0 );
    simulation.draw();
}
