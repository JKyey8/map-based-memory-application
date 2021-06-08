
//functions to run automatically


searchDates()

async function searchDates(){

document.getElementById("nav-searchbar").addEventListener("focusin", function(){

document.getElementById("searchbar-dropdown-container").style.display = "block"

})

document.getElementById("nav-searchbar").addEventListener("focusout", function(){

document.getElementById("searchbar-dropdown-container").style.display = "none"


})







document.getElementById("nav-searchbar").addEventListener("keyup", () => {
//@ts-ignore
var searchquery = document.querySelector("#nav-searchbar").value


console.log(searchquery)


if(searchquery == ""){

document.getElementById("searchbar-dropdown-container").style.display = "none"

}


})

}

