'use strict';

let data = [ 'Super', 'Rofl', 'Bitcoin', 'Robert', 'Jesus', 'World', 'Better', 'truth' ];

function start() {
    let item = data.shift();

    process.stdout.write( '                                                                                                 \r' );
	process.stdout.write( `· mailservice sendMail() response for ${ item }\r` );

    if( data.length ) {
        setTimeout( start, 500 );
    }
} 

start();