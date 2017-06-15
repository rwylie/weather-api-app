axios.get('/api')
 .then(function (response) {
   console.log(response.data);
   var t = document.getElementById('temp');
   t.innerHTML = response.data.currently.temperature;
 });
