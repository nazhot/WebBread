class Simulation {
    constructor() {
        this.powerSources = [];
        this.boards = [];
        this.components = [];
        this.running = false;
        this.stepMode = false;
    }

    draw() {
        for ( let powerSource of this.powerSources ) {
            powerSource.draw();
        }
        for ( let board of this.boards ) {
            board.draw();
        }
        for ( let component of this.components ) {
            component.draw();
        }
    }

    run() {
        if ( !this.running ) {
            return;
        }
        for ( let powerSource of this.powerSources ) {
            powerSource.run();
        }
        if ( this.stepMode ) {
            this.running = false;
        }
    }

    addPowerSource( powerSource ) {
        this.powerSources.push( powerSource );
    }

    addBoard( board ) {
        this.boards.push( board );
    }

    addComponent( component ) {
        this.components.push( component );
    }
}
