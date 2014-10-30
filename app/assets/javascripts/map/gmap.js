// $(window).load(function() {
//   loadScript();
// });

// var map;
// var poly;
// function initialize() {
//         var markerCoords349 = new google.maps.LatLng(38.89841, -77.039624);
//         var mapOptions = {
//           center: new google.maps.LatLng(38.895673, -77.050494),
//           zoom: 12,
//           mapTypeId: google.maps.MapTypeId.NORMAL
//         };
//         // initializing map
//         map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        
        
// var directionsService = new google.maps.DirectionsService();
// var directionsDisplay = new google.maps.DirectionsRenderer();
       

//        directionsDisplay.setMap(map);
//        // var waypts = [{location:"38.89841, -77.039624", stopover:true}];
//        var directionsRequest = {
//         origin: startTrip,
//         destination: endTrip,
//         // waypoints: waypts,
//         // optimizeWaypoints: true,
//         travelMode: google.maps.TravelMode.BICYCLING
//        };
//        directionsService.route(directionsRequest, function(response, status) {
//         //Check if request is successful
//         if (status == google.maps.DirectionsStatus.OK) {
//           console.log(status);
//           directionsDisplay.setDirections(response); //Display the directions result
//         }
//        }); 
     
// }


// function loadScript() {
//   console.log("map loading ...");
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
  
//   script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false' +

//     '&callback=initialize';
//   document.body.appendChild(script);
// }


var directionsDisplay;
var map;
var directionsService; 

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 6,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
directionsService = new google.maps.DirectionsService();
}

function calcRoute() {
  var start = startTrip;
  var end = endTrip;
  var waypts = [{location:"38.89841, -77.039624", stopover:true}];
  var radioArray =$('.active input');
  for (var i = 0; i < radioArray.length; i++) {
    console.log(radioArray[i].value);
      waypts.push({
          location:radioArray[i].value,
          stopover:true});
  }

  var request = {
      origin: start,
      destination: end,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.BICYCLING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions_panel');
      // summaryPanel.innerHTML = '';
      // // For each route, display summary information.
      // for (var i = 0; i < route.legs.length; i++) {
      //   var routeSegment = i + 1;
      //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
      //   summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
      //   summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
      //   summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      // }
    }
  });
}

$(document).ready(initialize);
$(document).on('page:load', initialize);