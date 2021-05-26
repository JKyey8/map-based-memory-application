//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3A1cTJmdzMwOTAxMnVzYmQ4OHlmb3JwIn0.VC5-U832snyQzljaNYdDrQ';
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-118.88335, 34.1932084],
    zoom: 15 // starting zoom
});
//satilite style: mapbox://styles/mapbox/satellite-v9
//street style: mapbox://styles/mapbox/streets-v11
