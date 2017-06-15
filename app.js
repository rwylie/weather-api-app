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


app.get('/api', cache('5 minutes'), function (request, response) {
  console.log('Generating new response');
  axios.get('https://api.darksky.net/forecast/b9e88fa3742c42f79dfb5645bfd3891b/51.508742,-0.120850').then(function (r) {
      response.json(r.data);
  });
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
