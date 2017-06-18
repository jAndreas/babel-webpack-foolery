const	webpack		= require( 'webpack' ),
		path		= require( 'path' ),
		fs			= require( 'fs' );

console.log( '\nRemoving old files in target directory:\n' );
fs.readdirSync( '/var/www/html/playground/' ).forEach(( file ) => {
	if( /\.js$|\.map$/.test( file ) ) {
		console.log( 'removing ', file );
		fs.unlink('/var/www/html/playground/' + file, (file) => {
		});
	}
});
console.log( '\nDone.\n' );


module.exports = {
	context:	__dirname,
	entry:		'./app.js',
	output:		{
		path:		'/var/www/html/playground/',
		filename:	'[name]-bundle.js'
	},
	//devtool:	'source-map',
	module:	{
		rules:	[
			{
				test:		/\.js$/,
				exclude:	/node_modules/,
				use: [
					{
						loader:		'babel-loader',
						options:	{
							presets:	[ [ 'es2015' ], [ 'es2017' ] ],
							plugins:	[ 'transform-runtime', 'syntax-dynamic-import', 'transform-regenerator' ]
						}
					}
				]
			},
			{
				test:		/\.css$/,
				use: [
					{ loader: 'style-loader/useable' },
					{ loader: 'css-loader' }
				]
			},
			{
				test:		/\.html$/,
				use: [
					{ loader: 'raw-loader' }
				]
			},
			{
				test:		/\.htmlx$/,
				use: [
					{ loader: 'template-string-loader' }
				]
			},
			{
				test:		/\.jpg$|.png$/,
				use: [
					{ loader: 'url-loader' }
				]
			}
		]
	},
	plugins:	[
		new webpack.optimize.CommonsChunkPlugin({ minChunks: 2, name: 'main', children: true, async: true }),
		new webpack.DefinePlugin({
			ENV_PROD: false,
		})
	]
};
