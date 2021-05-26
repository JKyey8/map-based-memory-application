
var movies = [-118.8852489, 34.182057]
var park = [-118.88335 ,34.1932084] 
var centerMap = movies

var mapboxgl;
var MapboxGeocoder;
	mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3A1cTJmdzMwOTAxMnVzYmQ4OHlmb3JwIn0.VC5-U832snyQzljaNYdDrQ';
var map = new mapboxgl.Map({
container: "map", // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: centerMap, // starting position [lng, lat]
zoom: 17 // starting zoom
});

map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);


// to make a marker

/*
var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map


*/