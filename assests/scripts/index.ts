//defined variables
const movies = [-118.8852489, 34.182057]
const Hendrixpark = [-118.88335 ,34.1932084] 
const library = [-118.8547961,34.2011644 ]
const parkbyTOHS = [-118.8724048,34.2132129 ]
const NPHS = [-118.9544604,34.1844188 ]
const mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
const mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";


//can change
var centerMap = movies
var mapStyle = mapstyleSteet


window.onload = function(){
renderMap();
}



var mapboxgl;

function renderMap(){


var MapboxGeocoder;
	mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3A1cTJmdzMwOTAxMnVzYmQ4OHlmb3JwIn0.VC5-U832snyQzljaNYdDrQ';
var map = new mapboxgl.Map({
container: "map", // container id
style: mapStyle, // style URL
center: centerMap, // starting position [lng, lat]
zoom: 17 // starting zoom
});

/*
// Add the control to the map.
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);

*/
}


// to make a marker

/*
var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map


*/



//changemapview
document.getElementById("map-street-button").addEventListener("click", function(){
mapStyle = mapstyleSteet 
renderMap()


})

document.getElementById("map-satilite-button").addEventListener("click", function(){
mapStyle = mapstyleSatilite
renderMap()


})