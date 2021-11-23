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


displayLocation()

/*
var mapboxgl;

var MapboxGeocoder;
	mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3A1cTJmdzMwOTAxMnVzYmQ4OHlmb3JwIn0.VC5-U832snyQzljaNYdDrQ';
var map = new mapboxgl.Map({
container: "map", // container id
style: mapStyle, // style URL
center: centerMap, // starting position [lng, lat]
zoom: 17 // starting zoom
});



*/

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
document.getElementById("map-street-button").addEventListener("click", function(){
map.setStyle(mapstyleSteet)

})
document.getElementById("map-satilite-button").addEventListener("click", function(){
map.setStyle(mapstyleSatilite)

})



//map scrolling to different locations
var isAtStart = true

document.getElementById("movies").addEventListener("click", function(e){


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



})


document.getElementById("park").addEventListener("click", function(){


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



})


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

//gettig info from searcbar





document.getElementById("nav-searchbar").addEventListener("keyup", function(){


document.getElementById("searchbar-dropdown-container").style.display = "block"





})

document.getElementById("nav-searchbar").addEventListener("focusout", function(){

//document.getElementById("searchbar-dropdown-container").style.display = "none"


})





document.getElementById("nav-searchbar").addEventListener("keyup", () => {

//disaplyLocations()


//@ts-ignore
let searchquery = document.querySelector("#nav-searchbar").value;
let highersearchquery = searchquery.toUpperCase();
let lowersearchquery = searchquery.toLowerCase();




datePlaces.forEach((location) => {
if(location.includes(searchquery) == true || location.includes(lowersearchquery) == true  || location.includes(highersearchquery) == true){

document.getElementById("location-" + location).style.display = "block"

} else {
document.getElementById("location-" + location).style.display = "none"
} 

})


if(searchquery == ""){

document.getElementById("searchbar-dropdown-container").style.display = "none"

}



})

async function displayLocation(){

//@ts-ignore
var searchquery = document.querySelector("#nav-searchbar").value;


await datePlaces.forEach((location) => {
 let searchDropdown = document.getElementById("searchbar-dropdown")
let searchablelocation= document.createElement("h3")
searchablelocation.id = "location-" + location
searchablelocation.className = "nav-searchable-locations"
searchablelocation.innerHTML = location


searchDropdown.appendChild(searchablelocation)




})


}

const stripperpole =  [-118.87072630976799, 34.21461781064242]





//search bar

document.getElementById("wonky").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "block"


})

document.getElementById("close-search").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "none"


})

