const boardTypes = Object.freeze({
    FULL: {id: 0, rows: 60, cols: 5, powerGroups: 10},
    HALF: {id: 1, rows: 30, cols: 5, powerGroups: 5},
    MINI: {id: 2, rows: 15, cols: 5, powerGroups: 1}
});

const boardIds = ["Full", "Half", "Mini"];



class Board {

    constructor( boardType, x, y, w, l ) {
        this.type = boardIds[boardType.id];
        this.rows = boardType.rows;
        this.cols = boardType.cols;
        this.powerGroups = boardType.powerGroups;
        this.border = .01 * w;
        this.x = x;
        this.y = y;
        this.w = w;
        this.l = l;
        this.holeAreaLength = l - this.border * 2;
        this.powerWidth = w / 6.0;
        this.powerLength = l - ( 1 + this.powerGroups ) * this.border;
        this.centerWidth = this.powerWidth * 4.0;
        this.holeSize = ( this.powerWidth - this.border * 2.5 ) / 2;
        console.log(this.holeSize);
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

        fill( 255, 0, 0 );
        for ( let i = 0; i < this.rows; ++i ) {
            rect( this.x + this.border + i * ( this.border / 2 + this.holeSize ),
                  this.y + this.powerWidth + this.border, this.holeSize, this.holeSize );
        }
    }

}
