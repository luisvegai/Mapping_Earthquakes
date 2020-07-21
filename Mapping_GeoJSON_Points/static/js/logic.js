// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       37.6213, -122.3790
//     ],
//     zoom: 5
//   });

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffff00',
//     radius: 300
//  }).addTo(map);

// Get data from cities.js
// let cityData = cities;


// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
// 	console.log(city)
//   L.circleMarker(city.location, {
//     color: 'orange',
//     fillColor: '#FFA500',
//     weight: 4,
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Coordinates for each point to be used in the line.
// let line = [
//   [37.6213, -122.3790],
//   [30.1966119,-97.6694],
//   [43.6777215,-79.6270137],
//   [40.6423747,-73.7844661]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "blue",
//   weight: 4,
//   opacity: 0.5,
//   dashArray: '20,15',
// }).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection",
 "features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"
    },
    "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]
    }
  }]
};

// Grabbing our GeoJSON data.
// using pointToLayer callback function:
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       // .bindPopup("<h2>" + feature.properties.city + "</h2>");
//       .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>"  + feature.properties.city + ", " + feature.properties.country + "</h3>")
//     }

// }).addTo(map);

L.geoJson(sanFranAirport, {
  onEachFeature: function(feature,layer){
    console.log(layer);
    layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>"  + feature.properties.city + ", " + feature.properties.country + "</h3>");
  }
}).addTo(map);


  // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox.streets',
//         accessToken: API_KEY
//     });
// to use id: styles you can change to this:
// mapbox.streets
// mapbox.light
// mapbox.dark
// mapbox.satellite
// mapbox.streets-satellite
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast


// get styles from here:
// Mapbox styles
// The following Mapbox styles are available to all accounts using a valid access token:
// if v1
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/mapbox/outdoors-v11
// mapbox://styles/mapbox/light-v10
// mapbox://styles/mapbox/dark-v10
// mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

