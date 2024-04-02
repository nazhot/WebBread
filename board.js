const boardTypes = Object.freeze({
    FULL: {id: 0, rows: 60, cols: 5},
    HALF: {id: 1, rows: 30, cols: 5},
    MINI: {id: 2, rows: 15, cols: 5}
});

const boardIds = ["Full", "Half", "Mini"];



class Board {

    constructor( boardType, x, y, w, l ) {
        this.type = boardIds[boardType.id];
        this.rows = boardType.rows;
        this.cols = boardType.cols;
        this.x = x;
        this.y = y;
        this.w = w;
        this.l = l;
        this.powerWidth = w / 6.0;
        this.centerWidth = this.powerWidth * 4.0;
    }

    draw() {
        fill( 255 );
        noStroke();
        rectMode( CORNER );
        //drawing main section
        rect( this.x, this.y, this.l, this.w ); 
        fill( 0, 255, 0 );
        //drawing power sections
        rect( this.x, this.y, this.l, this.powerWidth );
        rect( this.x, this.y + this.w, this.l, -this.powerWidth );
    }

}
