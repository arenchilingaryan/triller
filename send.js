const request = require('request');
const url = 'https://v.triller.co/WNrnQx';
var answer = '';

const sending = () => request({
   method: 'GET',
   url: url,
  }, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    answer = body;
    sending();sending();sending();sending();sending();
    console.log('clap')
  }
})

sending()