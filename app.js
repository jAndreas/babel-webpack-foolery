'use strict';

document.getElementById( 'foo' ).addEventListener( 'click', function( event ) {
	alert('requesting... via import() now');

	import( /* webpackChunkName: "Module1" */ './modules/mod1/entry.js' ).then( module => {
		console.log( 'mod1.js transfered and evaluated, value: ', module );
		module.main();
	}).catch( err => {
		console.log('ERR: ', err);
	});
	console.log('!!IF THIS WRITES BEFORE LOADED HINT, IT IS ASYNC!');
}, false);

setTimeout(function() {
	import( /* webpackChunkName: "Module2" */ './modules/mod2/entry.js' ).then( MOD2 => {
		console.log('REALLY NEWSTYLE mod2.js was transfered and now gets evaluated immediately: ', MOD2);
	}).catch( err => {
		console.log('ERR: ', err);
	});
}, 2000);

setTimeout(function() {
        import( /* webpackChunkName: "Ext1" */ 'https://apis.google.com/js/api.js' ).then( MOD2 => {
                console.log('hmmm, external js file was imported? ', MOD2);
        }).catch( err => {
                console.log('ERR: ', err);
        });
}, 3000);
