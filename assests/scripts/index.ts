//functions to run automatically
document.onload = () => {

var map = new mapboxgl.Map({
container: "map", // container id
style: mapStyle, // style URL
center: centerMap, // starting position [lng, lat]
zoom: 17 // starting zoom
});

}

document.documentElement.addEventListener('touchmove', function (event) {
    event.preventDefault();      
}, false);




//defined variables
var mapboxgl;
var MapboxGeocoder;
const datePlacesnames = ["AMC Theater", "Hendrix Park", "Thousand Oaks Community Park", "Thousand Oaks Library", "NPHS", "stripper pole", "SnapChat HQ", "Gatorade HQ",  ];





const mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
const mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";
const mapDescription = document.getElementById("map-description-container-text")
const mapTitle = document.getElementById("map-title-container")



//can change
var centerMap = [-118.881775, 34.2006482];
var mapStyle = mapstyleSteet;
const dateLocations = {
places:{
"Hendrix Park":{
description:"I like to go here to have fun",
coordinates:[-118.88335 ,34.1932084] 
},
"AMC Theater":{
description:"we went here on valenitnes day",
coordinates:[-118.8856167, 34.182057]
},
"Thousand Oaks Community Park":{
description:"",
coordinates:[-118.8724048,34.2132129 ]
},
"Thousand Oaks Library":{
description:"",
coordinates:[-118.85260, 34.20120 ]
},
"NPHS":{
description:"",
coordinates:[-118.9544604,34.1844188 ]
},
"stripper pole":{
description:"",
coordinates:[-118.87072630976799, 34.21461781064242]
},
"SnapChat HQ":{
description:"",
coordinates:[-118.4532558, 34.0164097]
},
"Gatorade HQ":{
description:"",
coordinates:[ -87.64233035323404, 41.88033851952631]
},













}

};




//draw map
	mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3diazU4MWswM3kwMnhvNnhzeDh1YTFxIn0.uE_0gehSKGwetvdoKPRVDw';
var map = new mapboxgl.Map({
container: "map", // container id
style: mapStyle, // style URL
center: centerMap, // starting position [lng, lat]
zoom: 10 // starting zoom
});






//add descrition on marker click
datePlacesnames.forEach((place) => {


const el = document.createElement('div');
  el.id = place
  el.className = 'marker' 

 var marker = new mapboxgl.Marker(el).setLngLat(dateLocations.places[place].coordinates)



new mapboxgl.Marker(el)
  .setLngLat(dateLocations.places[place].coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 0 }) // add popups
      .setHTML(
        `<h3>${place}</h3>`
      )
  )
  .addTo(map)



document.getElementById(place).addEventListener("click", () => {

var removeabletext = document.getElementById("map-description-text")
removeabletext.remove();
var removeabletitle = document.getElementById("map-title-text")
removeabletitle.remove();
var texttag = document.createElement("p")
texttag.id = "map-description-text";
texttag.className = "map-description-text"
var textnode = document.createTextNode(dateLocations.places[place].description)
texttag.appendChild(textnode)
mapDescription.appendChild(texttag)

var titletag = document.createElement("h2")
var titlenode = document.createTextNode(place)
titletag.id = "map-title-text";
titletag.className = 'map-title-text';
titletag.appendChild(titlenode)
mapTitle.appendChild(titletag)

})








})


// Add the control to the map.
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);







document.querySelector(".mapboxgl-ctrl-bottom-right").setAttribute("style", "display:none;")


