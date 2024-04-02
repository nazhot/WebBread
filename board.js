const boardTypes = Object.freeze({
    FULL: {id: 0, rows: 60, cols: 5},
    HALF: {id: 1, rows: 30, cols: 5},
    MINI: {id: 2, rows: 15, cols: 5}
});

const boardIds = ["Full", "Half", "Mini"];



class Board {

    constructor( boardType, x, y, w, h ) {
        this.type = boardIds[boardType.id];
        this.rows = boardType.rows;
        this.cols = boardType.cols;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        fill( 255 );
        noStroke();
        rectMode( CORNER );
        rect( this.x, this.y, this.w, this.h ); 
    }

}
