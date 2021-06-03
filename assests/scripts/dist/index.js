//defined variables
var movies = [-118.8852489, 34.182057];
var Hendrixpark = [-118.88335, 34.1932084];
var library = [-118.8547961, 34.2011644];
var parkbyTOHS = [-118.8724048, 34.2132129];
var NPHS = [-118.9544604, 34.1844188];
var mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
var mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";
//can change
var centerMap = movies;
var mapStyle = mapstyleSteet;
var mapboxgl;
var MapboxGeocoder;
mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3A1cTJmdzMwOTAxMnVzYmQ4OHlmb3JwIn0.VC5-U832snyQzljaNYdDrQ';
var map = new mapboxgl.Map({
    container: "map",
    style: mapStyle,
    center: centerMap,
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
// to make a marker
/*
var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map


*/
//changemapview
document.getElementById("map-street-button").addEventListener("click", function () {
    map.setStyle(mapstyleSteet);
});
document.getElementById("map-satilite-button").addEventListener("click", function () {
    map.setStyle(mapstyleSatilite);
});
//map scrolling to different locations
var isAtStart = true;
document.getElementById("movies").addEventListener("click", function (e) {
    var target = isAtStart ? movies : centerMap;
    isAtStart = !isAtStart;
    map.flyTo({
        center: target,
        zoom: 17,
        speed: 0.8,
        bearing: 0,
        curve: 1,
        easing: function (t) {
            return t;
        },
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    });
});
document.getElementById("park").addEventListener("click", function () {
    var target = isAtStart ? parkbyTOHS : centerMap;
    isAtStart = !isAtStart;
    map.flyTo({
        center: target,
        zoom: 17,
        speed: 0.8,
        bearing: 0,
        curve: 1,
        easing: function (t) {
            return t;
        },
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    });
});
