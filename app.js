var express = require('express');
var app = express();
var apicache = require('apicache');
var cache = apicache.middleware;

var axios = require('axios');

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));

app.use('/axios', express.static('node_modules/axios/dist'));

app.get('/', function (request, response) {
  response.render('home.hbs', {});
});

app.get('/api', cache('5 minutes'), function (request, response, next) {
  console.log('Generating new response');
  axios.get(`https://api.darksky.net/forecast/b9e88fa3742c42f79dfb5645bfd3891b/${request.query.lat},${request.query.long}`)
  .then(function (r) {
      response.json(r.data);
  })
  .catch(next);
});

//if you have a get request you need to use request.query.lat, if you want to use body you have to set up the body parser.

app.get('/weather', function (request, response) {
  response.render('weather.hbs', {})

})

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
