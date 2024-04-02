const boardTypes = Object.freeze({
    FULL: {id: 0, rows: 60, cols: 5, powerGroups: 10, numPerGroup: 5},
    HALF: {id: 1, rows: 30, cols: 5, powerGroups: 5, numPerGroup: 5},
    MINI: {id: 2, rows: 15, cols: 5, powerGroups: 1, numPerGroup: 15}
});

const boardIds = ["Full", "Half", "Mini"];



class Board {

    constructor( boardType, x, y, w, l ) {
        this.type = boardIds[boardType.id];
        this.rows = boardType.rows;
        this.cols = boardType.cols;
        this.powerGroups = boardType.powerGroups;
        this.numPerGroup = boardType.numPerGroup;
        this.border = .02 * w;
        this.x = x;
        this.y = y;
        this.w = w;
        this.l = l;
        this.holeAreaLength = l - this.border * 2;
        this.powerWidth = w / 6.0;
        this.centerWidth = this.powerWidth * 4.0;
        this.holeSize = ( this.powerWidth - this.border * 2.5 ) / 2;
        this.powerGap = ( this.l - this.border * 2 - this.holeSize * ( this.powerGroups * this.numPerGroup ) - ( this.border / 2 ) * ( this.powerGroups * ( this.numPerGroup  ) - 1 ) ) / ( this.powerGroups - 1 );
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
        for ( let i = 0; i < this.powerGroups * this.numPerGroup; ++i ) {
            let xPos = this.x + this.border + i * ( this.border / 2 + this.holeSize ) + Math.floor( i / this.numPerGroup ) * this.powerGap;
            rect( xPos, this.y + this.border, this.holeSize, this.holeSize );
            rect( xPos, this.y + this.border * 1.5 + this.holeSize, this.holeSize, this.holeSize );
            rect( xPos, this.y + this.w - this.border - this.holeSize, this.holeSize, this.holeSize );
            rect( xPos, this.y + this.w - this.border * 1.5 - this.holeSize * 2, this.holeSize, this.holeSize );
        }

    }

}
