//functions to run automatically
document.documentElement.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);
//defined variables
var mapboxgl;
var MapboxGeocoder;
var datePlacesnames = ["AMC Theater", "Hendrix Park", "Thousand Oaks Community Park", "Thousand Oaks Library", "NPHS", "stripper pole", "SnapChat HQ", "Gatorade HQ",];
var movies = [-118.8852489, 34.182057];
var Hendrixpark = [-118.88335, 34.1932084];
var library = [-118.8547961, 34.2011644];
var parkbyTOHS = [-118.8724048, 34.2132129];
var NPHS = [-118.9544604, 34.1844188];
var snapchatHQ = [-118.4532558, 34.0164097];
var mapstyleSteet = 'mapbox://styles/mapbox/streets-v11';
var mapstyleSatilite = "mapbox://styles/mapbox/satellite-v9";
var moviesDescription = "hello";
var HendrixparkDescription = "hello";
var libraryDescription = "hello";
var NPHSDescription = "hello";
var mapDescription = document.getElementById("map-description-container-text");
var mapTitle = document.getElementById("map-title-container");
//can change
var centerMap = movies;
var mapStyle = mapstyleSteet;
var dateLocations = {
    places: {
        "Hendrix Park": { description: "I like to go here to have fun" },
        "AMC Theater": { description: "we went here on valenitnes day" },
        "school": {}
    }
};
//draw map
mapboxgl.accessToken = 'pk.eyJ1IjoicmliYml0d2FycmlvciIsImEiOiJja3diazU4MWswM3kwMnhvNnhzeDh1YTFxIn0.uE_0gehSKGwetvdoKPRVDw';
var map = new mapboxgl.Map({
    container: "map",
    style: mapStyle,
    center: centerMap,
    zoom: 17 // starting zoom
});
//markers on the map
var geojson = {
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
                coordinates: [-118.88335, 34.1932084]
            },
            properties: {
                title: 'Hendrix Park',
                description: 'Most visited Park'
            }
        }
    ]
};
// add markers to map
for (var _i = 0, _a = geojson.features; _i < _a.length; _i++) {
    var feature = _a[_i];
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.id = feature.properties.title;
    el.className = 'marker';
    // make a marker for each feature and add to the map
    var marker = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates);
    new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 0 }) // add popups
        .setHTML("<h3>" + feature.properties.title + "</h3><p>" + feature.properties.description + "</p>"))
        .addTo(map);
}
//add descrition on marker click
datePlacesnames.forEach(function (place) {
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
    });
});
// Add the control to the map.
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
}));
// to make a marker
//map scrolling to different locations
var isAtStart = true;
var searchinput = null;
document.getElementById("nav-locationsearch").addEventListener("submit", function (e) {
    e.preventDefault();
    //@ts-ignore
    searchinput = document.getElementById('nav-searchbar').value;
    console.log(searchinput);
    if (searchinput == "movies") {
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
    }
    else if (searchinput == "park") {
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
    }
});
var stripperpole = [-118.87072630976799, 34.21461781064242];
document.querySelector(".mapboxgl-ctrl-bottom-right").setAttribute("style", "display:none;");
