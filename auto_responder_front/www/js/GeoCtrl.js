autoResponder.controller('GeoCtrl', function($cordovaGeolocation, $ionicPlatform, $interval) {

  var self = this;

  lat  = ""
  long = ""

  var posOptions = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    console.log("latitude", lat);
    console.log("longitude", long);
  }, 5000);
});
