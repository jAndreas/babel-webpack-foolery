const	webpack			= require( 'webpack' ),
		path			= require( 'path' ),
		fs				= require( 'fs' ),
		{ execSync }	= require( 'child_process' ),
		websiteName		= 'dev.meinungsverbrecher.de',
		websitePath		= `/var/www/html/${ websiteName }/`,
		publicPath		= `https://${ websiteName }/`;


module.exports = {
	context:	__dirname,
	entry:		[ './app.js' ],
	output:		{
		path:			websitePath,
		publicPath:		publicPath,
		filename:		'[name]-bundle.js',
		chunkFilename:	'[id].[chunkhash].js'
	},
	resolve:	{
		modules:	[
			path.resolve( './node_modules/' ),
			path.resolve( './lib/' ),
			path.resolve( './modules/' )
		]
	},
	devtool:	'source-map',
	module:	{
		rules:	[
			{
				test:		/\.css$/,
				use: [
					{
						loader:		'style-loader',
						options:	{
							injectType:		'lazyStyleTag'
						}
					},
					{ loader:		'css-loader' }
				]
			},
			{
				test:		/\.scss$/,
				use: [
					{
						loader:		'style-loader',
						options:	{
							injectType:		'lazyStyleTag'
						}
					},
					{ loader:		'css-loader' },
					{ loader:		'sass-loader' }
				]
			},
			{
				test:		/\.html$/,
				use: [
					{ loader:		'raw-loader' }
				]
			},
			{
                                test:           /\.htmlx$/,
                                use: [
                                        { loader:               'raw-loader' }
                                ]
                        },

			{
				test:		/\.(jpg|png|gif|ttf|mp3)$/,
				use: [
					{
						loader:		'url-loader',
						options:	{
							limit:				32000,
							useRelativePath:	false,
							publicPath:			publicPath
						}
					}
				]
			}
		]
	},
	plugins:	[
		new webpack.DefinePlugin({
			ENV_PROD:			false,
			ENV_PUBLIC_PATH:	`"${ publicPath }"`
		})
	],
	optimization:	{
		splitChunks:	{
			minSize:	4000
		}
	}
};

