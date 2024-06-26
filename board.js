const boardTypes = Object.freeze({
    FULL: {id: 0, rows: 60, cols: 5, powerGroups: 10, numPerGroup: 5},
    HALF: {id: 1, rows: 30, cols: 5, powerGroups: 5, numPerGroup: 5},
    MINI: {id: 2, rows: 15, cols: 5, powerGroups: 1, numPerGroup: 15}
});

const boardIds = ["Full", "Half", "Mini"];

class Hole { 
    constructor( x, y, s, isPower ) {
        this.x = x;
        this.y = y;
        this.size = s;
        this.isPower = isPower;
        this.isPowered = false;
        this.indexConnectedTo = null;
        this.isHovered = false;
    }

    draw() {
        this.isHovered = this.hoveredOver();
        if ( this.isHovered ) {
            fill( 100, 0, 0 );
        } else {
            fill( 255, 0, 0 );
        }
        noStroke();
        rectMode( CORNER );
        rect( this.x, this.y, this.size, this.size );
    }

    hoveredOver() {
        return mouseX <= this.x + this.size && mouseX >= this.x &&
               mouseY <= this.y + this.size && mouseY >= this.y;
    }
}


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
        this.wireDrawingOrigin = null;
        this.wires = [];
        this.setupHoles();
    }

    setupHoles() {
        this.holes = [];
        let numPowerHoles = this.powerGroups * this.numPerGroup;
        for ( let i = 0; i < numPowerHoles; ++i ) {
            let xPos = this.x + this.border + i * ( this.border / 2 + this.holeSize ) + Math.floor( i / this.numPerGroup ) * this.powerGap;
            this.holes[i] = new Hole( xPos, this.y + this.border, this.holeSize );
            this.holes[i + numPowerHoles] = new Hole( xPos, this.y + this.border * 1.5 + this.holeSize, this.holeSize, true );
            this.holes[i + numPowerHoles * 2] = new Hole( xPos, this.y + this.w - this.border - this.holeSize, this.holeSize, true );
            this.holes[i + numPowerHoles * 3] = new Hole( xPos, this.y + this.w - this.border * 1.5 - this.holeSize * 2, this.holeSize, true );
        }
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

        let selectEndPoint = false;
        let originIndex;
        if ( !mouseIsPressed ) {
            if ( this.wireDrawingOrigin ) {
                selectEndPoint = true;
                originIndex = this.wireDrawingOrigin.index;
            }
            this.wireDrawingOrigin = null;
        }

        for ( let i = 0; i < this.powerGroups * this.numPerGroup * 4; ++i ) {
            this.holes[i].draw();
            if ( selectEndPoint && this.holes[i].isHovered ) {
                if ( i !== originIndex ) {
                    this.holes[i].indexConnectedTo = originIndex;
                    this.holes[originIndex].indexConnectedTo = i;
                    this.wires.push( { startIndex: originIndex,
                                       endIndex: i
                                     } );
                }
            }
            if ( !this.wireDrawingOrigin && this.holes[i].isHovered && mouseIsPressed ) {
                this.wireDrawingOrigin = { index: i,
                                           x: this.holes[i].x + this.holeSize / 2.0,
                                           y: this.holes[i].y + this.holeSize / 2.0
                                         };
            }
        }

        for ( let wire of this.wires ) {
            fill( 123, 45, 200 );
            stroke( 2 );
            line( this.holes[wire.startIndex].x + this.holeSize / 2.0, 
                  this.holes[wire.startIndex].y + this.holeSize / 2.0,
                  this.holes[wire.endIndex].x + this.holeSize / 2.0,
                  this.holes[wire.endIndex].y + this.holeSize / 2.0 );
        }

        if ( this.wireDrawingOrigin ) {
            fill( 123, 45, 200 );
            stroke( 2 );
            line( this.wireDrawingOrigin.x, this.wireDrawingOrigin.y,
                  mouseX, mouseY );
        }
    }

}
