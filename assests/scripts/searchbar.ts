//functions to run automatically


//defined variables





//can change
var datePlaces = ["movies", "Hendrix Park", "Thousand Oaks Community Park", "library", "NPHS", "beach", "theater", "stripper pole", "place", "another place", "a third place???", "a fourth", "1","2","3","4","5", ];


displayLocation()



async function displayLocation(){

//@ts-ignore
var searchquery = document.querySelector("#nav-searchbar").value;


 datePlaces.forEach((location) => {
 let searchDropdown = document.getElementById("searchbar-dropdown")
let searchablelocation= document.createElement("h3")
searchablelocation.id = "location-" + location
searchablelocation.className = "nav-searchable-locations"
searchablelocation.innerHTML = location


searchDropdown.appendChild(searchablelocation)




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

document.getElementById("search-button").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "block"


document.getElementById("header").style.zIndex = "0"
})

document.getElementById("close-search").addEventListener("click", function(){

document.getElementById("search-results-container").style.display = "none"

document.getElementById("header").style.zIndex = "5"
})