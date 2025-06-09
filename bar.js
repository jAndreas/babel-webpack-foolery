'use strict';

const { WebcastPushConnection } = require( 'tiktok-live-connector' );

let uname = 'sick1.0.0';
let conn  = new WebcastPushConnection( uname );

(async function() {
	try {
		let res = await conn.connect();
		console.log( 'Connected. room id: ', res.roomId );
		console.log( res );

		conn.on( 'gift', data => {
			console.log( 'NEW GIFT:\n', data );
		});
	} catch( ex ) {
		console.log( 'error: ', ex );
	}
	
}());


