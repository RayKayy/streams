const https = require('https');

const options = {
  host: 'www.example.org',
  path: '/',
};

const callBack = (response) => {
  console.log('Response', response);
  console.log('In callBack');
}

console.log('before request');

https.request(options, callBack).end();

console.log('After request');

