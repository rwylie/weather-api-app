function get_weather () {
  var lat = document.getElementById('lat').value;   //gets the value from the form by value
  var long = document.getElementById('long').value;

  axios.get('/api', {params: {lat: lat, long: long}}) //if you use request.query and post you need to use params...without it it's just {lat: lat, long: long}
   .then(function (response) {
     console.log(response.data);
     var s = document.getElementById('icon');
     s.innerHTML = response.data.currently.icon;
     var t = document.getElementById('temp');
     t.innerHTML = response.data.currently.temperature;
   });

  return false;
}
