//functions to run automatically
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//defined variables
//can change
var datePlaces = ["movies", "Hendrix Park", "Thousand Oaks Community Park", "library", "NPHS", "beach", "theater", "stripper pole", "place", "another place", "a third place???", "a fourth", "1", "2", "3", "4", "5",];
displayLocation();
function displayLocation() {
    return __awaiter(this, void 0, void 0, function () {
        var searchquery;
        return __generator(this, function (_a) {
            searchquery = document.querySelector("#nav-searchbar").value;
            datePlaces.forEach(function (location) {
                var searchDropdown = document.getElementById("searchbar-dropdown");
                var searchablelocation = document.createElement("h3");
                searchablelocation.id = "location-" + location;
                searchablelocation.className = "nav-searchable-locations";
                searchablelocation.innerHTML = location;
                searchDropdown.appendChild(searchablelocation);
            });
            return [2 /*return*/];
        });
    });
}
//gettig info from searcbar
document.getElementById("nav-searchbar").addEventListener("keyup", function () {
    document.getElementById("searchbar-dropdown-container").style.display = "block";
});
document.getElementById("nav-searchbar").addEventListener("focusout", function () {
    //document.getElementById("searchbar-dropdown-container").style.display = "none"
});
document.getElementById("nav-searchbar").addEventListener("keyup", function () {
    //disaplyLocations()
    //@ts-ignore
    var searchquery = document.querySelector("#nav-searchbar").value;
    var highersearchquery = searchquery.toUpperCase();
    var lowersearchquery = searchquery.toLowerCase();
    datePlaces.forEach(function (location) {
        if (location.includes(searchquery) == true || location.includes(lowersearchquery) == true || location.includes(highersearchquery) == true) {
            document.getElementById("location-" + location).style.display = "block";
        }
        else {
            document.getElementById("location-" + location).style.display = "none";
        }
    });
    if (searchquery == "") {
        document.getElementById("searchbar-dropdown-container").style.display = "flex";
    }
});
//search bar
document.getElementById("search-button").addEventListener("click", function () {
    document.getElementById("search-results-container").style.display = "block";
    document.getElementById("header").style.display = "none";
});
document.getElementById("close-search").addEventListener("click", function () {
    document.getElementById("search-results-container").style.display = "none";
    document.getElementById("header").style.display = "flex";
});
