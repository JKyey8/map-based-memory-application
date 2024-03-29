//functions to run automatically
document.onload = function () {
    var map = new mapboxgl.Map({
        container: "map",
        style: mapStyle,
        center: centerMap,
        zoom: 17 // starting zoom
    });
};
addEventListener("load", function () {
    var viewport = document.querySelector("meta[name=viewport]");
    //@ts-ignore
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
});
//defined variables
var mapboxgl;
var MapboxGeocoder;
var datePlacesnames = ["AMC Theater", "Hendrix Park", "TOHS Park", "Thousand Oaks Library", "NPHS", "SnapChat HQ", "Gatorade HQ",];
var mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
var mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";
var mapDescription = document.getElementById("map-description-container-text");
var mapTitle = document.getElementById("map-title-container");
//can change
var centerMap = [-118.881775, 34.2006482];
var mapStyle = mapstyleSteet;
var dateLocations = {
    places: {
        "Hendrix Park": {
            description: "We have had quite a few dates here, to be honest. Just spending time with each other eating food and playing games(I'm better at Mario Kart and UNO). We definitely gotta do something similar again because we have not done it in a long time. Also skirts ;)",
            coordinates: [-118.88335, 34.1932084]
        },
        "AMC Theater": {
            description: "We had a date here where we went to watch Sonic the HedgeHog. Kinda weird thinking that was all before covid. I remember we finished the popcorn hella quick like that was hella funny. And then we go Wetzels Pretzels but ordered the wrong thing :( We are definitely gonna see the other Sonic Movie when it comes out tho :)",
            coordinates: [-118.8856167, 34.182057]
        },
        "TOHS Park": {
            description: "We have only been here once but we played basketball which is really fun. Also, I got the dream youtooz which you got me for my birthday and we had In'n'Out. I remember they almost ruined your order but thankfully they didn't. Maybe we can one day play tennis and I can show you how good I really am :) Also home of your stripper pole :))))))",
            coordinates: [-118.8724048, 34.2132129]
        },
        "Thousand Oaks Library": {
            description: "If imma be honest, we got like no work done when you came. I think you only did like 2 problems and we talked about how your homeschool worked because I was honestly confused. nonetheless, i do remember you had an amazing fit and it was the day we started using wonky :)",
            coordinates: [-118.85260, 34.20120]
        },
        "NPHS": {
            description: "Ok well, you literally go to this school now but that is definitely not because of me... We see each other every day which is amazing and I get to make fun of you whenever I want :) But it is nice to see you making new friends and getting along with my friends at the same time. It really makes me happy seeing you happy and I hope we enjoy our last year and a half there together :))",
            coordinates: [-118.9544604, 34.1844188]
        },
        "SnapChat HQ": {
            description: "Weirdly enough, we literally met on Snap through quick add. That will not be weird to me like meeting the love of my life on social media. Dude that is crazy but I'm definitely not complaining cause I get to be with Ziggy whenever I come over ;). OK, Seriously it is gonna be funny telling our kids we met on snap though. ",
            coordinates: [-118.4532558, 34.0164097]
        },
        "Gatorade HQ": {
            description: "NIPPLE TIP!!!",
            coordinates: [-87.64233035323404, 41.88033851952631]
        }
    }
};
//draw map
mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3diazU4MWswM3kwMnhvNnhzeDh1YTFxIn0.uE_0gehSKGwetvdoKPRVDw';
var map = new mapboxgl.Map({
    container: "map",
    style: mapStyle,
    center: centerMap,
    zoom: 10 // starting zoom
});
map.on("drag", function (e) {
    document.getElementById("map-description-container").classList.remove("showMapTitle");
    document.getElementById("map-description-container").classList.remove("showmapDescription");
    document.querySelectorAll(".mapboxgl-popup-content");
    var popup = document.getElementsByClassName('mapboxgl-popup');
    if (popup.length) {
        popup[0].remove();
    }
});
//add descrition on marker click
datePlacesnames.forEach(function (place) {
    var el = document.createElement('i');
    el.id = place;
    el.className = 'fas fa-map-pin';
    var marker = new mapboxgl.Marker(el).setLngLat(dateLocations.places[place].coordinates);
    new mapboxgl.Marker(el)
        .setLngLat(dateLocations.places[place].coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 0 }) // add popups
        .setHTML("<h3>" + place + "</h3>"))
        .addTo(map);
    document.getElementById(place).addEventListener("click", function () {
        var removeabletext = document.getElementById("map-description-text");
        removeabletext.remove();
        var removeabletitle = document.getElementById("map-title-text");
        removeabletitle.remove();
        var texttag = document.createElement("p");
        texttag.id = "map-description-text";
        texttag.className = "map-description-text";
        var textnode = document.createTextNode(dateLocations.places[place].description);
        texttag.appendChild(textnode);
        mapDescription.appendChild(texttag);
        var titletag = document.createElement("h2");
        var titlenode = document.createTextNode(place);
        titletag.id = "map-title-text";
        titletag.className = 'map-title-text';
        titletag.appendChild(titlenode);
        mapTitle.appendChild(titletag);
        document.getElementById("map-description-container").style.display = "flex";
        document.getElementById("map-description-container").classList.add("showMapTitle");
    });
});
// Add the control to the map.
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
}));
document.querySelector(".mapboxgl-ctrl-bottom-right").setAttribute("style", "display:none;");
function moveDown(event) {
    var mouseX = event.changedTouches[0].pageX;
    var mouseY = event.changedTouches[0].pageY;
    console.log(mouseY);
    var container = document.getElementById("map-description-container");
    //console.log(event.changedTouches[0].pageX)
    container.addEventListener("touchmove", function (event) {
        var movementY = event.changedTouches[0].pageY;
        if (mouseY < movementY && container.classList.contains("showmapDescription") == true) {
            container.classList.remove("showmapDescription");
        }
        else if (mouseY < movementY && container.classList.contains("showmapDescription") == false && container.classList.contains("showMapTitle") == true) {
            container.classList.remove("showMapTitle");
        }
        else if (mouseY > movementY) {
            container.classList.add("showmapDescription");
        }
    });
    /*
    const vh = Math.max(document.getElementById("map-description-container").clientHeight || 0, window.innerHeight || 0)
    const WindowY = window.scrollY + document.getElementById("map-description-container").getBoundingClientRect().bottom
    
    
    
    
    
    if(Math.floor(vh-(vh*6/100) + 0.01) == Math.floor(
    WindowY
    
    ) ){
    console.log("working")
    document.getElementById("map-description-container").classList.remove("showmapDescription");
    document.getElementById("map-description-container").classList.remove("showMapTitle");
    }
    else{
    
    console.log("nonon")
    }
    
    */
}
