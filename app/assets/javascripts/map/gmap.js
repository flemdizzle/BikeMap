$(window).load(function() {
  loadScript();
});

var map;
var poly;
function initialize() {
        var markerCoords349 = new google.maps.LatLng(38.89841, -77.039624);
        var mapOptions = {
          center: new google.maps.LatLng(38.895673, -77.050494),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.NORMAL
        };
        // initializing map
        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        
        
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
       

       directionsDisplay.setMap(map);
       var waypts = [{location:"38.89841, -77.039624", stopover:true}];
       var directionsRequest = {
        origin: startTrip,
        destination: endTrip,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.BICYCLING
       };
       directionsService.route(directionsRequest, function(response, status) {
        //Check if request is successful
        if (status == google.maps.DirectionsStatus.OK) {
          console.log(status);
          directionsDisplay.setDirections(response); //Display the directions result
        }
       }); 
     
}


function loadScript() {
  console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  
  script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false' +

    '&callback=initialize';
  document.body.appendChild(script);
}