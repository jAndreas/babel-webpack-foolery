const	webpack		= require( 'webpack' ),
		path		= require( 'path' ),
		fs			= require( 'fs' );

console.log( '\nRemoving old files in target directory:\n' );
fs.readdirSync( '/var/www/html/judgemy.org/' ).forEach(( file ) => {
	if( /\.js$|\.map$/.test( file ) ) {
		console.log( 'removing ', file );
		fs.unlink('/var/www/html/judgemy.org/' + file, (file) => {
		});
	}
});
console.log( '\nDone.\n' );


module.exports = {
	context:	__dirname,
	entry:		'./app.js',
	output:		{
		path:		'/var/www/html/judgemy.org/',
		filename:	'[name]-bundle.js'
	},
	//devtool:	'source-map',
	module:	{
		rules:	[
			{
				test:		/\.js$/,
				exclude:	/node_modules/,
				use: [
					{ loader:		'babel-loader' }
				]
			},
			{
				test:		/\.css$/,
				use: [
					{ loader:		'style-loader/useable' },
					{ loader:		'css-loader' }
				]
			},
			{
				test:		/\.html$/,
				use: [
					{ loader:		'raw-loader' }
				]
			},
			{
				test:		/\.htmlx$/,
				use: [
					{ loader:		'babel-loader' },
					{ loader:		'template-string-loader' }
				]
			},
			{
				test:		/\.jpg$|.png$/,
				use: [
					{ loader:		'url-loader' }
				]
			}
		]
	},
	plugins:	[
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ minChunks: 2, name: 'main', children: true, async: true }),
		new webpack.DefinePlugin({
			ENV_PROD: false,
		})
	]
};
