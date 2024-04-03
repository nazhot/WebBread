class Component {
    constructor( x, y, w, h ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.moving = false;
        this.connecting = false;
        this.breadBoardIndex = null;
        this.pinIndexes = [];
    }

    draw() {}

}


class Resistor extends Component {
    constructor( x, y, w, h, r ) {
        super( x, y, w, h );
        this.resistance = r;
    }


    draw() {
        noStroke();
        fill( 122, 66, 10 );
        rectMode( CORNER );
        rect( this.x, this.y, this.w, this.h );
    }
}

class LED extends Component {
    constructor( x, y, w, r, g, b ) {
        super( x, y, w, w );
        this.color = { r, g, b };
    }


    draw() {
        noStroke();
        fill( this.color.r, this.color.b, this.color.g );
        ellipseMode( CENTER );
        circle( this.x, this.y, this.w );
    }
}
