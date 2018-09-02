const https = require('https');

const options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now',
};

const callBack = (response) => {

  console.log('In callBack');

  response.on('data', (chunk) => {
    console.log(`[--CHUNK OF LENGTH ${chunk.length} --]`);
    //console.log(chunk);
    console.log(chunk.toString());
  })
}

console.log('before request');

https.request(options, callBack).end();

console.log('After request');

