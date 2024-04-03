class PowerSource {
    constructor( x, y, w, h ) {
        this.x  = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.voltage = 0;
        this.on = true;
    }

    draw() {
        noStroke();
        fill( 115 );
        rectMode( CORNER );
        rect( this.x, this.y, this.w, this.h );
        fill( 255 );
        rect( this.x + this.w / 4.0, this.y + this.h / 4.0, this. w / 2.0, this.h / 2.0 );
        fill( 0 );
        textSize( 40 );
        textAlign( CENTER, CENTER );
        text( str( this.voltage ) + "V", this.x + this.w / 2.0, this.y + this.h / 2.0 );
        let indicatorSize = Math.min( this.w, this.h ) / 10.0;
        fill( 0, 255, 0, this.on ? 255 : 150 );
        rect( this.x, this.y, indicatorSize, indicatorSize );
        fill( 207, 4, 4, !this.on ? 255 : 90 );
        rect( this.x, this.y + indicatorSize, indicatorSize, indicatorSize );
    }



}
