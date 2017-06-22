'use strict';

import http from 'http';

http.createServer( (req, res) => {
  let file = req.url.replace( '/public/', '' ),
      type = file.slice( file.lastIndexOf( '.' ) + 1 );
      
  let mime = {
    ts:		{
      name:	'video/mp2t',
      path:	'/secret_video/'
    },
    m3u8:	{
      name:	'application/vnd.apple.mpegurl',
      path:	'/secret_video/'
    },
    html:	{
      name:	'text/html',
      path:	'/secret_data/'
    },
    png:	{
      name:	'image/png',
      path:	'/secret_data/'
    }
  };
  
  console.log('request to: ', file, ' - type: ', type, ' mime: ', mime[type].name, ' path: ', mime[ type ].path);
  
  res.setHeader( 'X-Accel-Redirect', mime[ type ].path + file );
  res.writeHead(200, { 'Content-Type': mime[ type ].name });
  res.end();
}).listen( 2228 );

console.log('listening on port 2228');