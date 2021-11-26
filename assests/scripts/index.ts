//functions to run automatically


//defined variables




















const movies = [-118.8852489, 34.182057]
const Hendrixpark = [-118.88335 ,34.1932084] 
const library = [-118.8547961,34.2011644 ]
const parkbyTOHS = [-118.8724048,34.2132129 ]
const NPHS = [-118.9544604,34.1844188 ]
const snapchatHQ = [-118.4532558, 34.0164097]

const mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
const mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";


const moviesDescription = "hello"
const HendrixparkDescription = "hello"
const libraryDescription = "hello"
const NPHSDescription = "hello"




//can change
var centerMap = movies;
var mapStyle = mapstyleSteet;
var datePlaces = ["movies", "Hendrix Park", "Thousand Oaks Community Park", "library", "NPHS", "beach", "theater", "stripper pole", ];



var mapboxgl;

var MapboxGeocoder;
	mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3diazU4MWswM3kwMnhvNnhzeDh1YTFxIn0.uE_0gehSKGwetvdoKPRVDw';
var map = new mapboxgl.Map({
container: "map", // container id
style: mapStyle, // style URL
center: centerMap, // starting position [lng, lat]
zoom: 17 // starting zoom
});







//markers on the map
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-118.8856167, 34.182057]
      },
      properties: {
        title: 'AMC Theater',
        description: 'movies'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-118.88335 ,34.1932084]
      },
      properties: {
        title: 'Hendrix Park',
        description: 'Most visited Park'
      }
    }
  ]
};



// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)

new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 0 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
  )
  .addTo(map)
}












// Add the control to the map.
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);


// to make a marker


var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map








//map scrolling to different locations
var isAtStart = true




let searchinput = null;
document.getElementById("nav-locationsearch").addEventListener("submit", function(e){
e.preventDefault();

//@ts-ignore
searchinput = document.getElementById('nav-searchbar').value

console.log(searchinput)




if(searchinput == "movies"){

var target = isAtStart ? movies: centerMap

isAtStart = !isAtStart;

map.flyTo({
center:target,
zoom: 17,
speed:0.8,
bearing: 0, 
curve: 1,

easing: function (t) {
return t;
},
 
// this animation is considered essential with respect to prefers-reduced-motion
essential: true

})

} else if(searchinput == "park") {


var target = isAtStart ? parkbyTOHS: centerMap

isAtStart = !isAtStart;

map.flyTo({
center:target,
zoom: 17,
speed:0.8,
bearing: 0, 
curve: 1,

easing: function (t) {
return t;
},
 
// this animation is considered essential with respect to prefers-reduced-motion
essential: true

})
}


})




const stripperpole =  [-118.87072630976799, 34.21461781064242]







