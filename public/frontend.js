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
     var y = document.getElementById('summary');
     y.innerHTML = response.data.currently.summary;
     var i = document.getElementById('icon');
     i.innerHTML = response.data.currently.icon;
   });

  return false;
}

function initMap () {
  console.log('Maps loaded');
}

// SearchBox Method
function do_search () {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': $('#city-search').val()}, function(results, status) {
    var location = results[0].geometry.location;
    console.log(location);
    $('#lat').val(location.lat);
		$('#long').val(location.lng);

    get_weather();
  });

  return false;
}

  var skycons = new Skycons({"color": "pink"});
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY);


  // start animation!
  skycons.play();
