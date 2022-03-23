//functions to run automatically
document.addEventListener('swup:contentReplaced', function () {
    displayLocation();
});


window.onload = () => {

displayLocation();


}



addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
//@ts-ignore
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})


//can change
var datePlaces = ["AMC Theater", "Hendrix Park", "TOHS Park", "Thousand Oaks Library", "NPHS", "SnapChat HQ", "Gatorade HQ",  ];






async function displayLocation(){

//@ts-ignore
var searchquery = document.querySelector("#nav-searchbar").value;


 datePlaces.forEach((location) => {
 let searchDropdown = document.getElementById("searchbar-dropdown")
let searchablelocation= document.createElement("button")
let searchicon = document.createElement("i")
searchicon.id = "searchicon"
searchicon.className = "fas fa-search"
searchablelocation.id = "location-" + location
searchablelocation.className = "nav-searchable-locations"
searchablelocation.innerHTML = location
searchablelocation.appendChild(searchicon)

searchDropdown.appendChild(searchablelocation)


searchablelocation.addEventListener("click", async () => {


var removeabletext = document.getElementById("map-description-text")
removeabletext.remove();
var removeabletitle = document.getElementById("map-title-text")
removeabletitle.remove();
var texttag = document.createElement("p")
texttag.id = "map-description-text";
texttag.className = "map-description-text"
var textnode = document.createTextNode(dateLocations.places[location].description)
texttag.appendChild(textnode)
mapDescription.appendChild(texttag)

var titletag = document.createElement("h2")
var titlenode = document.createTextNode(location)
titletag.id = "map-title-text";
titletag.className = 'map-title-text';
titletag.appendChild(titlenode)
await mapTitle.appendChild(titletag)




document.getElementById("map-description-container").classList.add("showMapTitle")

document.getElementById("search-results-container").style.display = "none";

document.getElementById("close-search-button").style.display = "none";

MapFlying(location);


})

})


}






async function MapFlying(location) {



const popup = new mapboxgl.Popup({ closeOnClick: true })
.setLngLat(dateLocations.places[location].coordinates)
.setHTML(
        `<h3>${location}</h3>`
      )
.addTo(map);




var isAtStart = true
var target;
target = isAtStart ? dateLocations.places[location].coordinates: map.center

isAtStart = !isAtStart;

map.flyTo({
center:target,
zoom: 17,
speed:0.9,
bearing: 0, 
curve: 1,

easing: function (t) {
return t;
},
 
// this animation is considered essential with respect to prefers-reduced-motion
essential: true

})



}


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

document.getElementById("searchbar-dropdown-container").style.display = "flex"

}



})







//search bar

document.getElementById("nav-searchbar").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "block"
document.getElementById("close-search-button").style.display = "block"

document.getElementById("header").style.zIndex = "0"
})

document.getElementById("close-search-button").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "none"
document.getElementById("close-search-button").style.display = "none"

document.getElementById("header").style.zIndex = "5"


})