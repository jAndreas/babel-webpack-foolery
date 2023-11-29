'use strict';

const axios = require('axios');

const url = 'https://play.ht/api/v2/tts';
const options = {
  url: url,
  method: 'POST',
  headers: {
    accept: 'text/event-stream',
    'content-type': 'application/json',
    AUTHORIZATION: '059046ca10c743649d5f67e76c7de131',
    'X-USER-ID': 'YYEcJTc2EqTHt5zH7CsdU9kn8ri1'




  },
  body: JSON.stringify({
    text: 'Schwänze von Afghanen lutschen und das Gesicht besamen lassen.',
    voice: 'Ariane',
    quality: 'medium',
    output_format: 'mp3',
    speed: 1,
    sample_rate: 24000,
    voice_engine: 'PlayHT2.0'
  })
};

axios(options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
