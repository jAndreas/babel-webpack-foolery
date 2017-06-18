'use strict';

import { launch } from 'barfoos2.0/core.js';

document.getElementById( 'foo' ).addEventListener( 'click', function( event ) {
	alert('requesting... via import()');

	import( './mod1.js' ).then( module => {
		console.log( 'mod1.js transfered and evaluated, value: ', module );
		module.main();
	}).catch( err => {
		console.log('ERR: ', err);
	});
	console.log('!!IF THIS WRITES BEFORE LOADED HINT, IT IS ASYNC!');
}, false);

setTimeout(function() {
	import( './mod2.js' ).then( MOD2 => {
		console.log('REALLY NEWSTYLE mod2.js was transfered and now gets evaluated immediately: ', MOD2);
	}).catch( err => {
		console.log('ERR: ', err);
	});
}, 2000);
